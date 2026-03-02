# AI Agent Guard Architecture

## Objective
Build an AI-powered on-chain assistant that can inspect wallet state and produce safe execution decisions with hard guardrails.

## Components
1. **On-chain reader**: Solana JSON-RPC (`getBalance`, extendable to token/account state).
2. **Decision engine**: deterministic policy baseline (`HOLD` / `REDUCE_RISK` / `ALLOW_EXECUTION`).
3. **Safety guardrails**: converts risky actions to `SIMULATE_ONLY` in v0.
4. **Execution adapter (next)**: submit transactions only when explicit policy and human approval gates pass.
5. **Audit log**: structured JSON output for every decision loop.

## Why this fits AI Track
- AI/agentic loop influences action recommendations from on-chain data.
- Explicit guardrails and permission model are first-class.
- Productized as runnable demo + docs, with clear path to production hardening.

## Token utility path (planned)
- Access tiering for advanced agent strategies.
- Staking-based quotas for agent execution frequency.
- Fee discounts for token holders.

## Risks
- Autonomous tx risk -> mitigated by SIMULATE_ONLY default.
- RPC reliability -> multi-RPC failover planned.
- Prompt/model drift -> deterministic constraints and allow-list actions.
