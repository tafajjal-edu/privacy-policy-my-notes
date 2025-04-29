import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 mb-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/512.png-KvfV3UDQ4vaTrvyDs3nGj9tGfrIkip.jpeg"
            alt="My Notes Logo"
            width={96}
            height={96}
            className="rounded-2xl"
          />
        </div>
        <h1 className="text-3xl font-bold">My Notes</h1>
      </div>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            This Privacy Policy describes how we collect, use, process, and disclose your information, including
            personal information, in conjunction with your access to and use of our services.
          </p>
          <p>
            When you use our services, you trust us with your information. We are committed to keeping that trust. That
            starts with helping you understand our privacy practices.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p>
            We do not collect any information from our users. Our service is designed to respect your privacy
            completely.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
          <p>Since we do not collect any information from our users, we do not use your information in any way.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Sharing Your Information</h2>
          <p>We do not share any information because we do not collect any information from our users.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to provide the services you have requested, or for
            other essential purposes such as complying with our legal obligations, resolving disputes, and enforcing our
            agreements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access personal information we hold about you</li>
            <li>
              The right to request that we rectify or update your personal information that is inaccurate or incomplete
            </li>
            <li>The right to request that we erase your personal information in certain circumstances</li>
            <li>The right to restrict the use of your personal information in certain circumstances</li>
            <li>The right to object to our processing of your personal information in certain circumstances</li>
            <li>The right to withdraw your consent at any time (to the extent we base processing on consent)</li>
            <li>The right to data portability in certain circumstances</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
            access, disclosure, alteration, and destruction.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
          <p>
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the
            date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding
            a statement to our homepage or sending you a notification).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className="mt-2">
            <p className="font-medium">Email: higjhtech@gmail.com</p>
          </div>
        </section>
      </div>
    </div>
  )
}
