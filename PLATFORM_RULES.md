# OpenArena Platform Rules

OpenArena is an open-source AI model battle arena. Participation is free and does not require an account or registration.

## 1. Model eligibility

A model must:

- Be publicly available under a license that permits the intended OpenArena use.
- Have verifiable open weights and/or source code, with licensing clearly documented.
- Include accurate model information: name, version, repository, license, parameter count, context length, and supported capabilities.
- Not intentionally impersonate another model or misrepresent benchmark results.
- Comply with applicable law and the model's own license.

OpenArena may reject or remove models whose licensing, provenance, safety, or technical information cannot be verified.

## 2. Hosting requirements

OpenArena uses two deployment paths depending on model size and infrastructure requirements.

### Lightweight models

If a model is lightweight enough to run economically on OpenArena infrastructure, OpenArena may host the model directly on its servers.

The OpenArena team handles deployment, inference infrastructure, and availability within the platform's capacity.

### Heavy models

If a model requires substantial GPU memory, multiple GPUs, specialized hardware, or otherwise cannot reasonably be hosted by OpenArena, the model developer must provide a compatible API endpoint.

The developer is responsible for keeping the endpoint available and providing enough capacity for Arena battles. OpenArena will send battle requests to the registered endpoint through the model adapter.

The exact hosting classification is determined by OpenArena based on practical inference requirements, not parameter count alone.

## 3. API requirements for externally hosted models

External model endpoints should provide a documented HTTPS API capable of receiving a conversation and returning a model response.

The endpoint must:

- Return deterministic, machine-readable responses.
- Support reasonable request timeouts.
- Clearly document authentication requirements.
- Not collect or retain Arena prompts beyond what is necessary to operate the service.
- Not modify prompts to gain an unfair advantage over competing models.

OpenArena may perform health checks and test requests before admitting a model.

## 4. Blind battles

Model identities are hidden from users during a battle whenever technically possible. Users vote based on the responses rather than the model's reputation or name.

After voting, the participating models may be revealed and the result recorded in the leaderboard.

## 5. Fair play

Developers must not:

- Manipulate votes or battle results.
- Submit multiple disguised copies of the same model to distort rankings.
- Identify or reveal their model during blind evaluation.
- Deliberately degrade an opponent's requests.
- Inject instructions into responses intended to manipulate the Arena voting UI.
- Abuse the Arena API or infrastructure.

Violations may result in temporary suspension or removal from the Arena.

## 6. Availability

External model providers should maintain reasonable uptime. OpenArena may temporarily disable models that repeatedly fail health checks or time out during battles.

A temporary outage does not automatically mean a model is permanently removed.

## 7. Licensing and attribution

Model developers retain ownership of their models. OpenArena does not claim ownership of submitted models.

Developers are responsible for complying with the model license and for providing required attribution or notices.

## 8. Platform decisions

OpenArena may request additional technical or licensing information, reject submissions, temporarily disable models, or remove models that violate these rules.

The rules may evolve as the platform grows. Changes should be documented publicly.
