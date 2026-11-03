# Project architecture
- Keep the Black November commercial values in one shared module used by the Hero and annual plan, with tests, so the same campaign cannot show conflicting offers or checkout links.
- Implement the campaign ribbon within the existing fixed navigation and share its height through CSS tokens, so Hero and anchor spacing stay aligned.