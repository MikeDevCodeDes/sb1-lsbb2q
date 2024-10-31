import React from 'react';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Shield className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
      </div>

      <div className="prose max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          We take your privacy seriously. This policy outlines how we collect, use,
          and protect your personal information.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Information Collection</h2>
            <p className="text-gray-600">
              We collect information that you provide directly to us when you create an account,
              make a purchase, or interact with our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Usage</h2>
            <p className="text-gray-600">
              Your data is used to improve our services, personalize your experience,
              and communicate with you about updates and features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
            <p className="text-gray-600">
              We implement security measures to protect your personal information
              from unauthorized access and maintain data accuracy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;