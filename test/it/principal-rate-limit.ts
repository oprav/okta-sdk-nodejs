import { expect } from 'chai';
import { spy } from 'sinon';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3
} from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/principal-rate-limit`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Principal Rate Limit API', () => {
  it('should create entity, get, update and list entities', async () => {
    // TIP: Deletion of Principal Rate Limit entity is not supported

    // Get first SSWS token
    const tokens = await client.apiTokenApi.listApiTokens();
    const { value: { id } } = await tokens.next(); // get first item
    const token = await client.apiTokenApi.getApiToken({
      apiTokenId: id
    });

    const mockPrl = {
      principalId: token.id,
      principalType: 'SSWS_TOKEN' as v3.PrincipalType,
      defaultPercentage: 50,
      defaultConcurrencyPercentage: 75,   
    };

    // Create
    let prl: v3.PrincipalRateLimitEntity;
    try {
      prl = await client.principalRateLimitApi.createPrincipalRateLimitEntity({
        entity: mockPrl,
      });
      expect(prl).to.be.instanceOf(v3.PrincipalRateLimitEntity);
      expect(prl).to.have.property('id');
      expect(prl.principalId).to.equal(mockPrl.principalId);
      expect(prl.defaultConcurrencyPercentage).to.equal(mockPrl.defaultConcurrencyPercentage);
    } catch(e) {
      // Principal Rate Limit entity already exists for this token
      expect(e.status).to.equal(400);
      expect(e.errorSummary).to.contain('Api validation failed: principalRateLimitMediated');

      // Get entity by principalId
      const prls = await client.principalRateLimitApi.listPrincipalRateLimitEntities({
        filter: `principalId eq "${token.id}"`
      });
      expect(prls).to.be.instanceOf(Collection);
      const { value } = await prls.next(); // get first item
      prl = value;
    }
    
    // Get
    const prl2 = await client.principalRateLimitApi.getPrincipalRateLimitEntity({
      principalRateLimitId: prl.id,
    });
    expect(prl2).to.be.instanceOf(v3.PrincipalRateLimitEntity);
    expect(prl2.id).to.equal(prl.id);
    expect(prl2.principalId).to.equal(prl.principalId);
    expect(prl2.defaultConcurrencyPercentage).to.equal(prl.defaultConcurrencyPercentage);
    
    // Update
    prl2.defaultConcurrencyPercentage = prl2.defaultConcurrencyPercentage == 75 ? 80 : 75;
    const updatedPrl = await client.principalRateLimitApi.updatePrincipalRateLimitEntity({
      principalRateLimitId: prl2.id,
      entity: prl2,
    });
    expect(updatedPrl).to.be.instanceOf(v3.PrincipalRateLimitEntity);
    expect(updatedPrl.id).to.equal(prl2.id);
    expect(updatedPrl.principalId).to.equal(prl2.principalId);
    expect(updatedPrl.defaultConcurrencyPercentage).to.equal(prl2.defaultConcurrencyPercentage);

    // List
    // TIP: Filter is required
    const prls = await client.principalRateLimitApi.listPrincipalRateLimitEntities({
      filter: 'principalType eq "SSWS_TOKEN"'
    });
    expect(prls).to.be.instanceOf(Collection);
    await prls.each(prl => {
      expect(prl).to.be.instanceOf(v3.PrincipalRateLimitEntity);
    });

  });
});
