// TermsAndConditions.js

import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-heading">Terms and Conditions</h1>
      <div className="terms-content">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using EmezieNFT, you confirm that you have read, understood, and agree to comply with this Agreement, including any future modifications.
        </p>
        <p>
          If you are accessing or using EmezieNFT on behalf of an organization, you represent and warrant that you have the authority to bind that organization to this Agreement.
        </p>

        <h2>2. Use of the Platform</h2>
        <p>
          <strong>2.1 Eligibility:</strong> You must be at least 18 years old to use EmezieNFT. By accessing or using our platform, you represent and warrant that you are 18 years of age or older.
        </p>
        <p>
          <strong>2.2 Account Registration:</strong> You may be required to create an account to access certain features of EmezieNFT. You are responsible for maintaining the confidentiality of your account information and are solely responsible for all activities that occur under your account.
        </p>
        <p>
          <strong>2.3 Prohibited Conduct:</strong> You agree not to engage in any prohibited conduct while using EmezieNFT. Prohibited conduct includes, but is not limited to:
        </p>
        <ul className="prohibited-list">
          <li>Violating any applicable laws or regulations.</li>
          <li>Infringing upon the intellectual property rights of others.</li>
          <li>Uploading, transmitting, or distributing any harmful or malicious content.</li>
          <li>Interfering with the operation of EmezieNFT or other users' access to the platform.</li>
          <li>Engaging in any fraudulent, deceptive, or abusive activities.</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>
          <strong>3.1 Ownership:</strong> EmezieNFT and its content, including but not limited to text, graphics, logos, images, software, and underlying technology, are the intellectual property of EmezieNFT or its licensors. You acknowledge and agree that you have no right or license to use any of the intellectual property without prior written permission from EmezieNFT.
        </p>
        <p>
          <strong>3.2 User Content:</strong> By submitting or uploading any content to EmezieNFT, you grant EmezieNFT a non-exclusive, royalty-free, worldwide, transferable license to use, reproduce, distribute, display, and modify the content for the purposes of operating and promoting the platform.
        </p>

        <h2>4. Disclaimers and Limitation of Liability</h2>
        <p>
          <strong>4.1 No Warranty:</strong> EmezieNFT is provided on an "as-is" and "as available" basis. We do not warrant that the platform will be error-free or uninterrupted, nor do we make any representations regarding the accuracy or completeness of any content available on EmezieNFT.
        </p>
        <p>
          <strong>4.2 Limitation of Liability:</strong> In no event shall EmezieNFT or its affiliates be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of EmezieNFT, including but not limited to loss of profits, data, or business opportunities.
        </p>

        <h2>5. Governing Law and Dispute Resolution</h2>
        <p>
          This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any dispute arising out of or relating to this Agreement shall be resolved through negotiation and, if required, through binding arbitration in accordance with the rules of [Arbitration Organization]. The arbitration shall take place in [Jurisdiction], and the language of arbitration shall be [Language].
        </p>
      </div>
    </div>
  );
};

export default Terms;
