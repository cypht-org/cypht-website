---
weight: 40
id: 20
title: Public code
description: "An assessment of the Cypht project against the Standard for Public Code."
layout: section/documentation
format: md
---

# Cypht and the Standard for Public Code

Assessment of the Cypht project against the [Standard for Public Code](https://www.standardforpubliccode.org/).

## [Code in the open](https://www.standardforpubliccode.org/criteria/code-in-the-open.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | All source code for any software in use (unless used for fraud detection) MUST be published and publicly accessible. | [Cypht source](https://github.com/cypht-org/cypht). |
| yes | All source code for any policy in use (unless used for fraud detection) MUST be published and publicly accessible. | Selected policies are documented in [policy cases](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.json). |
| yes | The codebase MUST NOT contain sensitive information regarding users, their organization or third parties. |  |
| yes | Any source code not currently in use (such as new versions, proposals or older versions) SHOULD be published. | Public [Git tags](https://github.com/cypht-org/cypht/tags) and [releases](https://github.com/cypht-org/cypht/releases). |
|  | Documenting which source code or policy underpins any specific interaction the general public may have with an organization is OPTIONAL. | |

## [Bundle policy and source code](https://www.standardforpubliccode.org/criteria/bundle-policy-and-source-code.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The codebase MUST include the policy that the source code is based on. | [Policy cases embedded in the codebase](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.json), and linked from [contribution guidelines](https://github.com/cypht-org/cypht?tab=contributing-ov-file). |
| yes | If a policy is based on source code, that source code MUST be included in the codebase, unless used for fraud detection. | Policy cases identify PHPUnit tests in the public source repository. |
| yes | Policy SHOULD be provided in machine-readable and unambiguous formats. | [JSON policy cases](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.json) and their [schema](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.schema.json). |
| yes | Continuous integration tests SHOULD validate that the source code and the policy are executed coherently. | [Policy-cases workflow](https://github.com/cypht-org/cypht/blob/master/.github/workflows/policy-cases.yml). |

## [Make the codebase reusable and portable](https://www.standardforpubliccode.org/criteria/make-the-codebase-reusable-and-portable.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The codebase MUST be developed to be reusable in different contexts. | Modular PHP and JavaScript application; see the [README](https://github.com/cypht-org/cypht/blob/master/README.md) and [module documentation](https://github.com/cypht-org/cypht/tree/master/modules). |
| yes | The codebase MUST be independent from any secret, undisclosed, proprietary or non-open licensed software or services for execution and understanding. | Deployment options include [Docker](https://github.com/cypht-org/cypht/tree/master/docker) and Composer/PHP. The application connects to mail providers and can use optional services, but is not tied to one provider. |
| yes | The codebase SHOULD be in use by multiple parties. | The public [Matrix community chat](https://matrix.to/#/#cypht-org_community:gitter.im) includes Cypht users; other users are not yet represented in the room. |
|  | The roadmap SHOULD be influenced by the needs of multiple parties. | The public [issue tracker](https://github.com/cypht-org/cypht/issues) and [Matrix community chat](https://matrix.to/#/#cypht-org_community:gitter.im) provide channels for community input. How that input influences roadmap decisions is not documented, and no public roadmap is yet available. |
| yes | The development of the codebase SHOULD be a collaboration between multiple parties. | Community members contribute through public [pull requests](https://github.com/cypht-org/cypht/pulls), alongside project maintainers. |
| yes | Configuration SHOULD be used to make source code adapt to context specific needs. | Accounts, protocols, modules, and deployment settings are configurable. |
| yes | The codebase SHOULD be localizable. | Cypht ships interface translations in its [language directory](https://github.com/cypht-org/cypht/tree/master/language). |
| yes | Source code and its documentation SHOULD NOT contain situation-specific information. |  |
| yes | Codebase modules SHOULD be documented in such a way as to enable reuse in codebases in other contexts. |  |
| yes | The software SHOULD NOT require services or platforms available from only a single vendor. | Core deployment is self-hostable; common mail and directory protocols are supported. |

## [Welcome contributors](https://www.standardforpubliccode.org/criteria/welcome-contributors.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The codebase MUST allow anyone to submit suggestions for changes to the codebase. | Public [issue tracker](https://github.com/cypht-org/cypht/issues) and [pull requests](https://github.com/cypht-org/cypht/pulls). |
| yes | The codebase MUST include contribution guidelines explaining what kinds of contributions are welcome and how contributors can get involved, for example in a `CONTRIBUTING` file. | [CONTRIBUTING.md](https://github.com/cypht-org/cypht/blob/master/CONTRIBUTING.md). |
| yes | The codebase MUST document the governance of the codebase, contributions and its community, for example in a `GOVERNANCE` file. | [GOVERNANCE.md](https://github.com/cypht-org/cypht/blob/master/GOVERNANCE.md) |
|  | The contribution guidelines SHOULD document who is expected to cover the costs of reviewing contributions. |  |
| yes | The codebase SHOULD advertise the committed engagement of involved organizations in the development and maintenance. | [EvoluData](https://evoludata.com/) is mentioned in the website footer. |
| no | The codebase SHOULD have a publicly available roadmap. | No established roadmap. The project receives feature requests and bug reports from its users, that get actively worked on. |
| yes | The codebase SHOULD publish codebase activity statistics. | [GitHub Pulse](https://github.com/cypht-org/cypht/pulse) and repository history. |
|  | Including a code of conduct for contributors in the codebase is OPTIONAL. |  |

## [Make contributing easy](https://www.standardforpubliccode.org/criteria/make-contributing-easy.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The codebase MUST have a public issue tracker that accepts suggestions from anyone. | [Cypht issues](https://github.com/cypht-org/cypht/issues). |
| yes | The documentation MUST link to both the public issue tracker and submitted codebase changes, for example in a `README` file. | [CONTRIBUTING.md](https://github.com/cypht-org/cypht/blob/master/CONTRIBUTING.md) links to issues and asks that changes be associated with an issue. |
| yes | The codebase MUST have communication channels for users and developers, for example email lists. | [Community chat](https://gitter.im/cypht-org/community), [issues](https://github.com/cypht-org/cypht/issues), and [monthly community meetings](https://github.com/cypht-org/cypht/wiki/Monthly-Community-Meetings). |
| yes | There MUST be a way to report security issues for responsible disclosure over a closed channel. | [SECURITY.md](https://github.com/cypht-org/cypht/blob/master/SECURITY.md) directs reports to the security mailbox. |
| yes | The documentation MUST include instructions for how to report potentially security sensitive issues. | [SECURITY.md](https://github.com/cypht-org/cypht/blob/master/SECURITY.md). |

## [Maintain version control](https://www.standardforpubliccode.org/criteria/maintain-version-control.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | All files in the codebase MUST be version controlled. | Public [Git repository](https://github.com/cypht-org/cypht). |
| yes | All decisions MUST be documented in commit messages. | Public [commit history](https://github.com/cypht-org/cypht/commits/master); contributions are expected to describe their change and link an issue. |
| yes | Every commit message MUST link to discussions and issues wherever possible. | The [contribution guide](https://github.com/cypht-org/cypht/blob/master/CONTRIBUTING.md) asks contributors to link code changes to an issue; pull requests record review discussion. |
| yes | The codebase SHOULD be maintained in a distributed version control system. | Git. |
| yes | Contribution guidelines SHOULD require contributors to group relevant changes in commits. | The contribution guide asks for changes that are minimal and specific to the issue being addressed. |
| yes | Maintainers SHOULD mark released versions of the codebase, for example using revision tags or textual labels. | [Release tags](https://github.com/cypht-org/cypht/tags). |
| yes | Contribution guidelines SHOULD encourage file formats where the changes within the files can be easily viewed and understood in the version control system. | Contributions are submitted as Git diffs through pull requests. |
|  | It is OPTIONAL for contributors to sign their commits and provide an email address, so that future contributors are able to contact past contributors with questions about their work. |  |

## [Require review of contributions](https://www.standardforpubliccode.org/criteria/require-review-of-contributions.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | All contributions that are accepted or committed to release versions of the codebase MUST be reviewed by another contributor. | Contributions are submitted and reviewed as public [pull requests](https://github.com/cypht-org/cypht/pulls). |
| yes | Reviews MUST include source, policy, tests and documentation. | Review practice considers these project aspects; policy cases are documented in [docs/policy-cases.md](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.md). |
| yes | Reviewers MUST provide feedback on all decisions to not accept a contribution. | Review feedback is provided on pull requests. |
| yes | The review process SHOULD confirm that a contribution conforms to the standards, architecture and decisions set out in the codebase in order to pass review. | The [coding style guide](https://github.com/cypht-org/cypht/blob/master/CODING_STYLE.md), tests, and pull-request review support this. |
| yes | Reviews SHOULD include running both the software and the tests of the codebase. | The [contribution guide](https://github.com/cypht-org/cypht/blob/master/CONTRIBUTING.md) requests manual testing; [CI workflows](https://github.com/cypht-org/cypht/tree/master/.github/workflows) run automated tests. |
| yes | Contributions SHOULD be reviewed by someone in a different context than the contributor. |  |
| yes | Version control systems SHOULD NOT accept non-reviewed contributions in release versions. | Main branch is protected. |
| yes | Reviews SHOULD happen within two business days. | No official policy, but it's common. |
|  | Performing reviews by multiple reviewers is OPTIONAL. | Multiple reviewers may participate, but are not required in every case. |

## [Document codebase objectives](https://www.standardforpubliccode.org/criteria/document-codebase-objectives.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The codebase MUST contain documentation of its objectives, like a mission and goal statement, that is understandable by developers and designers so that they can use or contribute to the codebase. | The [README](https://github.com/cypht-org/cypht/blob/master/README.md) describes Cypht as combining email accounts without replacing them, and as an email client and news reader. |
| yes | Codebase documentation SHOULD clearly describe the connections between policy objectives and codebase objectives. | [Policy cases](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.md) explain how selected user-visible, security, and privacy requirements are tested. |
| yes | Documenting the objectives of the codebase for the general public is OPTIONAL. | The README provides a public-facing product description. |

## [Document the code](https://www.standardforpubliccode.org/criteria/document-the-code.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | All functionality MUST be described in a clear language. The audience is those that understand the purpose of the codebase. | The [online documentation](https://www.cypht.org/documentation/) and module READMEs describe all features and behaviors |
| yes | The documentation MUST contain a description of how to install and run the software. | [Installation guide](https://www.cypht.org/install), [Docker documentation](https://github.com/cypht-org/cypht/blob/master/docker/DOCKERHUB-README.md), and [developer documentation](https://www.cypht.org/documentation/developer/dev-docs/). |
| yes | The documentation MUST contain examples demonstrating the key functionality. | [Feature documentation](https://www.cypht.org/features) includes examples and screenshots. |
| yes | The documentation SHOULD contain an overview that is easy to understand by a wide audience. The audience includes the general public and journalists. | [Cypht overview](https://www.cypht.org/documentation/). |
| yes | The documentation SHOULD contain a section describing how to install and run a standalone version of the software. This includes a test dataset if necessary. | [Installation guide](https://www.cypht.org/install) and [Docker setup](https://github.com/cypht-org/cypht/tree/master/docker). |
| yes | The documentation SHOULD contain examples for all functionality. |  |
| yes | The documentation SHOULD describe the key components or modules and their relationships. For example, this could be done as a high level architectural diagram. | [Developer documentation](https://www.cypht.org/documentation/developer/dev-docs/) describes the module architecture. |
| no | There SHOULD be continuous integration tests for the quality of the documentation. | Not yet. |

## [Use plain English](https://www.standardforpubliccode.org/criteria/use-plain-english.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The set of authoritative languages for codebase documentation MUST be documented. | Cypht is currently only documented in English, no other language to distinguish against. |
| yes | English MUST be one of the authoritative languages. | Project documentation is written in English. |
| yes | All codebase documentation MUST be up to date in all authoritative languages. | English. |
| yes | All source code MUST be in English, except where policy is machine interpreted as code. | Source identifiers and comments are written in English. |
| yes | All bundled policy MUST be available, or have a summary, in all authoritative languages. | English. |
| yes | There SHOULD be no acronyms, abbreviations, puns or legal/language/domain specific terms in the codebase without an explanation preceding it or a link to an explanation. | Protocol names are documented in project and module documentation. |
| yes | Documentation SHOULD aim for a lower secondary education reading level, as recommended by the Web Content Accessibility Guidelines 2. |  |
|  | Providing additional courtesy translations of any code, documentation or tests is OPTIONAL. |  |

## [Use open standards](https://www.standardforpubliccode.org/criteria/use-open-standards.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | For features of the codebase that facilitate the exchange of data the codebase MUST use an open standard that meets the Open Source Initiative Open Standard Requirements. | Cypht supports IMAP, SMTP, JMAP, CardDAV, LDAP, Sieve, and OpenPGP, among others; see [module documentation](https://www.cypht.org/modules/). |
|  | Any non-open standards used MUST be recorded clearly as such in the documentation. | No non-open data-exchange standard used. |
| yes | Any standard chosen for use within the codebase MUST be listed in the documentation with a link to where it is available. | The [module list](https://www.cypht.org/modules/) links to standards and protocol information. |
|  | Any non-open standards chosen for use within the codebase MUST NOT hinder collaboration and reuse. | No non-open data-exchange standard used. |
|  | If no existing open standard is available, effort SHOULD be put into developing one. |  |
| yes | Open standards that are machine testable SHOULD be preferred over open standards that are not. | Protocol implementations and tests provide machine-verifiable interoperability. |
|  | Non-open standards that are machine testable SHOULD be preferred over non-open standards that are not. |  |

## [Use continuous integration](https://www.standardforpubliccode.org/criteria/use-continuous-integration.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
|  | All functionality in the source code MUST have automated tests. | PHPUnit and Selenium cover substantial functionality, but not all features are tested, yet. |
| yes | Contributions MUST pass all automated tests before they are admitted into the codebase. |  |
| yes | The codebase MUST have guidelines explaining how to structure contributions. | [CONTRIBUTING.md](https://github.com/cypht-org/cypht/blob/master/CONTRIBUTING.md). |
| yes | The codebase MUST have active contributors who can review contributions. | Public [pull requests](https://github.com/cypht-org/cypht/pulls) and [GitHub Pulse](https://github.com/cypht-org/cypht/pulse). |
| yes | Automated test results for contributions SHOULD be public. | Workflow results are available through [GitHub Actions](https://github.com/cypht-org/cypht/actions). |
| yes | The codebase guidelines SHOULD state that each contribution should focus on a single issue. | Contributors are asked to link changes to an issue and keep changes minimal and specific. |
| yes | Source code test and documentation coverage SHOULD be monitored. | The README links to [Coveralls coverage](https://coveralls.io/github/cypht-org/cypht?branch=master); documentation coverage is not monitored. |
| yes | Testing policy and documentation for consistency with the source and vice versa is OPTIONAL. | [Policy cases](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.json) are validated in CI. |
|  | Testing policy and documentation for style and broken links is OPTIONAL. |  |
|  | Testing the software by using examples in the documentation is OPTIONAL. |  |

## [Publish with an open license](https://www.standardforpubliccode.org/criteria/publish-with-an-open-license.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | All source code and documentation MUST be licensed such that it may be freely reusable, changeable and redistributable. | [LGPL-2.1](https://github.com/cypht-org/cypht/blob/master/LICENSE). |
| yes | Software source code MUST be licensed under an OSI-approved or FSF Free/Libre license. | [LGPL-2.1](https://github.com/cypht-org/cypht/blob/master/LICENSE). |
| yes | All source code MUST be published with a license file. | [LICENSE](https://github.com/cypht-org/cypht/blob/master/LICENSE). |
| yes | Contributors MUST NOT be required to transfer copyright of their contributions to the codebase. | Contributors retain copyright ownership; no transfer is required. |
|  | All source code files in the codebase SHOULD include a copyright notice and a license header that are machine-readable. | Files do not currently include a copyright notice or license header. |
|  | Having multiple licenses for different types of source code and documentation is OPTIONAL. |  |

## [Make the codebase findable](https://www.standardforpubliccode.org/criteria/make-the-codebase-findable.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
|  | The name of the codebase SHOULD be descriptive and free from acronyms, abbreviations, puns or organizational branding. | “Cypht” is short and not descriptive by itself; the README explains the project. |
| yes | The codebase SHOULD have a short description that helps someone understand what the codebase is for or what it does. | The [README](https://github.com/cypht-org/cypht/blob/master/README.md) describes Cypht as a webmail client and news reader. |
| yes | Maintainers SHOULD submit the codebase to relevant software catalogs. | [Packagist](https://packagist.org/packages/jason-munro/cypht). |
| yes | The codebase SHOULD have a website which describes the problem the codebase solves using the preferred jargon of different potential users of the codebase (including technologists, policy experts and managers). | [Cypht website](https://www.cypht.org/) and [documentation](https://www.cypht.org/documentation/). |
| yes | The codebase SHOULD be findable using a search engine by codebase name. | Cypht has a public website and repository indexed by common search engines. |
| yes | The codebase SHOULD be findable using a search engine by describing the problem it solves in natural language. |  |
| yes | The codebase SHOULD have a unique and persistent identifier where the entry mentions the major contributors, repository location and website. | [composer.json](https://github.com/cypht-org/cypht/blob/master/composer.json) |
|  | The codebase SHOULD include a machine-readable metadata description, for example in a `publiccode.yml` file. |  |
| yes | A dedicated domain name for the codebase is OPTIONAL. | The project has [cypht.org](https://www.cypht.org/). |
|  | Regular presentations at conferences by the community are OPTIONAL. |  |

## [Use a coherent style](https://www.standardforpubliccode.org/criteria/use-a-coherent-style.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The codebase MUST use a coding or writing style guide, either the codebase community's own or an existing one referred to in the codebase. | [CODING_STYLE.md](https://github.com/cypht-org/cypht/blob/master/CODING_STYLE.md). |
|  | Contributions SHOULD pass automated tests on style. | Pull requests check title format; all test suites, but not code style yet. |
| yes | The style guide SHOULD include expectations for inline comments and documentation for non-trivial sections. | [Coding style guide](https://github.com/cypht-org/cypht/blob/master/CODING_STYLE.md). |
|  | Including expectations for understandable English in the style guide is OPTIONAL. |  |

## [Document codebase maturity](https://www.standardforpubliccode.org/criteria/document-codebase-maturity.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The codebase MUST be versioned. | [Release tags](https://github.com/cypht-org/cypht/tags). |
| yes | The codebase MUST prominently document whether or not there are versions of the codebase that are ready to use. | [Releases](https://github.com/cypht-org/cypht/releases), [installation documentation](https://www.cypht.org/install), and supported versions in [SECURITY.md](https://github.com/cypht-org/cypht/blob/master/SECURITY.md). |
| yes | Codebase versions that are ready to use MUST only depend on versions of other codebases that are also ready to use. |  |
| yes | The codebase SHOULD contain a summary of changes from version to version, for example in the `RELEASE_NOTES`. | [Releases](https://github.com/cypht-org/cypht/releases). |
| yes | The method for assigning version identifiers SHOULD be documented. | [How-to-release-Cypht](https://github.com/cypht-org/cypht/wiki/How-to-release-Cypht#17-branching-overview-ascii-diagram). |
|  | It is OPTIONAL to use semantic versioning. |  |
