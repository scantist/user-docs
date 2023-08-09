<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

# Get Access Token

To generate an access token for your {{companyConfig.COMPANY_NAME}} account, follow these steps once you have logged in (_if you don’t already have a {{companyConfig.COMPANY_NAME}} account, click_ [_here_ ](https://scantist.atlassian.net/wiki/spaces/SD/pages/1777958921)_to create one)_

&#x20;

1.  Click on the gear icon in the top-right corner and select **Organization** from the drop-down menu

    &#x20;

2.  Click on the **Access Token** tab

    &#x20;

3.  Enter a name for your access token in the field provided and select **Create Token** from the drop-down Actions menu

    &#x20;

4.  Your access token will be generated and will be available for you to copy **once only**. Make sure to store it safely, as it will only be displayed once

&#x20;

This access token will be referred to later as **SCANTISTTOKEN**, so make a note of it for future reference. With your access token in hand, you can now proceed to scan your projects for vulnerabilities using {{companyConfig.COMPANY_NAME}} SCA.
