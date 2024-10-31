import React from 'react';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <FileText className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Terms of Use</h1>
      </div>

      <div className="prose max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          By using our services, you agree to these terms. Please read them carefully.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Account Terms</h2>
            <p className="text-gray-600">
              You are responsible for maintaining the security of your account and
              any activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Content Guidelines</h2>
            <p className="text-gray-600">
              Users must follow our community guidelines when posting content or
              interacting with other users on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Service Usage</h2>
            <p className="text-gray-600">
              Our services are provided "as is" and we reserve the right to modify
              or discontinue them at any time.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;