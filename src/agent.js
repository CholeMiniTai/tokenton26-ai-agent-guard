const RPC = process.env.SOLANA_RPC || 'https://api.devnet.solana.com';
const WATCH_WALLET = process.env.WATCH_WALLET;

if (!WATCH_WALLET) {
  console.error('[config-error] WATCH_WALLET is required via environment variable');
  process.exit(1);
}

async function rpc(method, params = []) {
  const res = await fetch(RPC, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
  });
  const data = await res.json();
  if (data.error) throw new Error(JSON.stringify(data.error));
  return data.result;
}

function decide({ solBalance }) {
  if (solBalance < 0.2) return { action: 'HOLD', reason: 'insufficient_fee_buffer' };
  if (solBalance < 1) return { action: 'REDUCE_RISK', reason: 'low_buffer' };
  return { action: 'ALLOW_EXECUTION', reason: 'healthy_buffer' };
}

function guardrails(decision) {
  const blocked = ['ALLOW_EXECUTION'];
  // demo mode: never auto-send real tx yet
  if (blocked.includes(decision.action)) {
    return { ...decision, action: 'SIMULATE_ONLY', guardrail: 'no_autonomous_send_in_v0' };
  }
  return decision;
}

async function main() {
  const lamports = await rpc('getBalance', [WATCH_WALLET, { commitment: 'confirmed' }]);
  const sol = (lamports.value || 0) / 1e9;

  const rawDecision = decide({ solBalance: sol });
  const safeDecision = guardrails(rawDecision);

  const out = {
    ts: new Date().toISOString(),
    wallet: WATCH_WALLET,
    balanceSOL: sol,
    decision: safeDecision,
  };

  console.log(JSON.stringify(out, null, 2));
}

main().catch((e) => {
  console.error('[agent-error]', e.message);
  process.exit(1);
});
