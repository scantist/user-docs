<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

# Triggering a Scan

{{companyConfig.APP_NAME}} SCA offers different types of input and integrations to support scanning under different environments or scenarios. The following pages will provide information on each one of these methods to work with {{companyConfig.APP_NAME}} SCA.

In summary, these are the differences between the scan methods - each has its own advantages and shortcomings. In general, we recommend using the **build-based scan** when possible.

|                 | **Build-based scan** | **Static Scan** | **Binary Scan**       |
| --------------- | -------------------- | --------------- | --------------------- |
| **Type**        | Source Code          | Source Code     | Binary                |
| **Trigger**     | CI                   | CLI / Upload    | CLI / Upload          |
| **Accuracy**    | High                 | Medium          | Low                   |
| **Ease of use** | Low                  | Medium          | High                  |
| **Remediation** | Best                 | Limited         | Limited               |
| **When**        | Always               | No build access | No source-code access |

To trigger a scan via the above-mentioned methods, you will need to log in to your {{companyConfig.APP_NAME}} SCA account. If you don't have an account, click [here](https://scantist.atlassian.net/wiki/spaces/SD/pages/1777958921) to create one.
