# TokenTon26 AI Track - Agentic Solana MVP (WIP)

## Goal
Build an AI-powered on-chain agent system (with guardrails) for TokenTon26 AI Track.

## Current status
- [x] Requirements analysis (AI Track + Grand Prize)
- [x] Technical design drafted
- [x] MVP scaffold started
- [ ] Deploy live demo
- [ ] DeAura token launch
- [ ] Reach required trading volume

## Proposed product
**Agentic Risk Guard + Execution Assistant**
- Reads on-chain wallet/rpc signals
- Produces actions (`HOLD`, `REDUCE_RISK`, `ALLOW_EXECUTION`)
- Enforces hard guardrails before any transaction execution
- Logs decisions for auditability

## Stack
- Node.js (no heavy deps), TypeScript-style JS modules
- Solana JSON-RPC
- Optional integration: Anchor programs / client later

## Constraints from bounty rules
- Must include DeAura token launch link
- Must reach >= $200,000 trading volume
- Must submit demo video + pitch video + product link + docs

## Time estimate
- MVP core (agent loop + guardrails + on-chain reads): 8-12h
- Frontend/demo polish: 6-10h
- Token launch + market bootstrap + analytics proof: 12-24h (external dependency)
- Submission assets (videos/docs): 4-6h

## Feasibility assessment
- Technical MVP feasibility: **80%**
- Full bounty compliance incl. DeAura launch + 200k volume before deadline: **35-45%** (depends on distribution/liquidity execution)



## Demo
- Static demo page: `web/index.html`
- Run local static server: `python3 -m http.server 8080` then open `http://localhost:8080/web/`
- Wallet address is user-provided at runtime (no hardcoded wallet in source)

## Runtime config
- `WATCH_WALLET` is required for `src/agent.js`
- Example: `WATCH_WALLET=<wallet_pubkey> node src/agent.js`

## Submission Assets
- Architecture doc: `docs/ARCHITECTURE.md`
- Pitch draft: `docs/PITCH.md`
