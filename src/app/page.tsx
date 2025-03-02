"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Massdriver Logo" 
              width={180} 
              height={40} 
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <div className="relative group">
            <button className="flex items-center space-x-1 py-2">
              <span>Features</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-1 py-2">
              <span>Solutions</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <Link href="/pricing" className="py-2">Pricing</Link>
          <Link href="/blog" className="py-2">Blog</Link>
          <Link href="/docs" className="py-2">Docs</Link>
          <Link href="/templates" className="py-2">Templates</Link>
          <div className="relative group">
            <button className="flex items-center space-x-1 py-2">
              <span>Community</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="text-blue-600 font-medium">Sign In</Link>
          <Link href="/try-free" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium">Try Free</Link>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section - Centered */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DevOps Without the Red Tape</h1>
            <p className="text-xl md:text-2xl mx-auto max-w-3xl mb-8">
              At Massdriver, we believe in prevention, not permission.<br />
              <br />
              Our platform lets &ldquo;ops&rdquo; teams encode their expertise and your organization&apos;s non-negotiables into preapproved self-service infrastructure powered by the IaC tools you already know.<br />
              <br />
              Massdriver—Fast by default. Safe by design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/demo" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-center">See a demo</Link>
              <Link href="/trial" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium text-center">Start free trial</Link>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-16 px-6 bg-sky-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">How it Works</h2>
            <div className="flex justify-center space-x-4 text-white mb-10">
              <button 
                className={`px-4 py-2 font-medium ${activeTab === 1 ? 'border-b-2 border-white' : ''}`}
                onClick={() => setActiveTab(1)}
              >
                1. Code
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeTab === 2 ? 'border-b-2 border-white' : ''}`}
                onClick={() => setActiveTab(2)}
              >
                2. Publish
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeTab === 3 ? 'border-b-2 border-white' : ''}`}
                onClick={() => setActiveTab(3)}
              >
                3. Diagram
              </button>
            </div>
            
            {activeTab === 1 && (
              <div className="mb-16">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="text-sm font-medium text-gray-500 mb-2">1/3</div>
                  <h3 className="text-2xl font-bold mb-4">Ops Teams Write IaC</h3>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-lg mb-4">
                        DevOps and Platform teams use the infrastructure-as-code tools they know, such as Terraform / OpenTofu, Helm, or CloudFormation, and package them into use-case-specific modules with your policy tooling built in.
                      </p>
                      <p className="font-bold">
                        Your IaC is no longer just config, its a functional software asset. Policy and cost tools are embedded, cutting down maintenance for Ops teams.
                      </p>
                    </div>
                    <div className="relative">
                      <Image 
                        src="/code_screenshot.webp" 
                        alt="Ops Teams Write IaC" 
                        width={500} 
                        height={300} 
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="mb-16">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="text-sm font-medium text-gray-500 mb-2">2/3</div>
                  <h3 className="text-2xl font-bold mb-4">Ops Teams Publish Modules</h3>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <Image 
                        src="/publish.webp"
                        alt="Ops Teams Publish Modules" 
                        width={500} 
                        height={300} 
                        className="rounded-lg"
                      />
                    </div>
                    <div className="order-1 md:order-2">
                      <p className="text-lg mb-4">
                        Bundled modules are published in the Massdriver Service Catalog, where developers can easily discover supported cloud services and applications with your organization&apos;s compliance, security, and guardrails in place.
                      </p>
                      <p className="font-bold">
                        A central repository for provisioning, policy, and cost controls of your cloud resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="mb-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="text-sm font-medium text-gray-500 mb-2">3/3</div>
                  <h3 className="text-2xl font-bold mb-4">Devs Diagram to Provision</h3>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-lg mb-4">
                        Developers diagram what they want and your IaC modules are used to provision. Developers don&apos;t have to copy Helm Charts or Terraform Modules. They don&apos;t have brittle IaC pipelines. Instead, Massdriver uses your modules to provision and builds ephemeral CI/CD pipelines behind the scenes based on the tooling <em>in</em> your modules.
                      </p>
                      <p className="font-bold">
                        Say goodbye to 100&apos;s of brittle IaC pipelines.
                      </p>
                    </div>
                    <div className="relative">
                      <Image 
                        src="/diagram.webp"
                        alt="Devs Diagram to Provision" 
                        width={500} 
                        height={300} 
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Loved by DevOps and Software Engineers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">Massdriver is incredibly easy to use, and makes best practices for operations approachable even for novices. Despite this, it also provides immense power to more advanced users.</p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="font-medium">Zachary Hueras</p>
                    <p className="text-sm text-gray-600">Principal Software Engineer</p>
                  </div>
                </div>
                <p className="mt-4 text-sm italic">AMD Global Telemedicine experienced an 89% reduction in &ldquo;DevOps&rdquo; tasks and saw ROI in about 10 days.</p>
                <Link href="/case-study" className="text-blue-600 text-sm font-medium mt-2 inline-block">View AMD Case Study</Link>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">Massdriver is a must for small teams that don&apos;t have the resources for a dedicated DevOps team, as it significantly simplifies and improves their deployment processes. It is also a great tool for bigger teams as it follows best practices when provisioning infrastructure and modernizes processes by using Infrastructure as Code.</p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="font-medium">Ivan Ivanov</p>
                    <p className="text-sm text-gray-600">Head of Engineering</p>
                  </div>
                </div>
                <p className="mt-4 text-sm italic">GameStake saved 25% on their cloud costs by adopting Massdriver.</p>
                <Link href="/case-study" className="text-blue-600 text-sm font-medium mt-2 inline-block">View GameStake Case Study</Link>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">We are partnering with innovative companies like Massdriver to help founders achieve more. As a part of Microsoft for Startups Founders Hub, startups can now receive access to Massdriver&apos;s productivity tools, designed to streamline cloud management and reduce infrastructure development time.</p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="font-medium">Kirk Safford</p>
                    <p className="text-sm text-gray-600">Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Possibilities Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">See What&apos;s Possible with Massdriver&apos;s IaC-Powered Platform</h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center">
                <Image 
                  src="/aws-partner.png" 
                  alt="AWS Partner" 
                  width={60} 
                  height={60} 
                />
              </div>
              <div className="flex items-center">
                <Image 
                  src="/google-cloud.png"
                  alt="Google Cloud Partner"
                  width={60} 
                  height={60} 
                />
              </div>
              <div className="flex items-center">
                <Image 
                  src="/yc.png" 
                  alt="Y Combinator" 
                  width={60} 
                  height={60} 
                />
              </div>
              <div className="flex items-center">
                <Image 
                  src="/1984-vc.png" 
                  alt="1984 VC" 
                  width={60} 
                  height={60} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Infrastructure at the Speed of Thought</h2>
            <p className="text-xl text-center mb-16">Enable developer self-service without risking compliance, security, cost, or reliability.</p>

            {/* Feature 1 */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Cloud Service Catalog</h3>
                <p className="mb-4">Your DevOps teams have a lot on their plate, don&apos;t lose another great teammate to burnout.</p>
                <p className="mb-4">Enable developers to self-serve cloud infrastructure from approved IaC templates in a central catalog.</p>
                <p className="mb-4">Developers drag, connect, and deploy. No more last minute Jira tickets to the DevOps team.</p>
              </div>
              <div className="relative">
                <Image 
                  src="/video1.gif" 
                  alt="Cloud Service Catalog" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative">
                <Image 
                  src="/video2.gif" 
                  alt="Cost & Health Insights" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Cost & Health Insights</h3>
                <p className="mb-4">Get a clear view of your cloud&apos;s health and costs right where your developers manage their infrastructure.</p>
                <p className="mb-4">With real-time insights, you can make proactive adjustments, ensuring systems are efficient and cost-effective.</p>
                <p className="mb-4">Never get caught with a surprise cloud bill again.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Inventory & Audit Records</h3>
                <p className="mb-4">Get instant visibility into every asset, streamline your workflows, and keep your projects moving forward efficiently.</p>
                <p className="mb-4">Say goodbye to the chaos of scattered resources and hello to seamless, organized control.</p>
                <p className="mb-4">No more hunting for assets or piecing together the puzzle of your cloud infrastructure.</p>
              </div>
              <div className="relative">
                <Image 
                  src="/video3.gif" 
                  alt="Inventory & Audit Records" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/demo" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block">See a demo</Link>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold mb-4">How AMD Global Telemedicine Reduced Software Release Effort by 89%</h2>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <div className="mb-6">
                    <h4 className="font-bold">Chip McIntosh</h4>
                    <p className="text-gray-600">Chief Innovation Officer</p>
                  </div>
                  
                  <blockquote className="italic mb-6">
                    Massdriver&apos;s platform has revolutionized our approach to infrastructure, saving us 89% of the time spent managing infrastructure. Our operation could upscale by an order of magnitude, if not two, and we would not be in crisis mode to hire somebody to manage infrastructure.
                  </blockquote>
                  
                  <p className="mb-6">
                    Explore how AMD Global Telemedicine revolutionized their software deployment process, cutting down release effort by 89% with Massdriver&apos;s cloud solutions. This case study is a must-read for those aiming to scale efficiently and enhance team productivity through innovative cloud technology. Download now for key insights.
                  </p>
                  
                  <ul className="list-disc pl-5 mb-6">
                    <li>Reduced software release effort by 89% with Massdriver&apos;s cloud solutions.</li>
                    <li>Managed a 100x workload surge without increasing engineering staff.</li>
                    <li>Improved team collaboration and productivity ninefold.</li>
                  </ul>
                  
                  <Link href="/case-study" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block">View Case Study</Link>
                </div>
                
                <div className="md:w-1/3 relative">
                  <Image 
                    src="/amd.png" 
                    alt="AMD Global Telemedicine Case Study" 
                    width={400} 
                    height={300} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Image 
                src="/platform.svg" 
                alt="Massdriver Podcast" 
                width={300} 
                height={120} 
              />
            </div>
            <p className="mb-4">This podcast caters to professionals and enthusiasts passionate about the intricacies of platform architecture, cloud operations, and scaling DevOps practices.</p>
            <Link href="/podcast" className="text-blue-600 font-bold">LISTEN TO THE PODCAST</Link>
          </div>
        </section>

        {/* Certification Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">We know the cloud</h2>
            
            <blockquote className="bg-white p-8 rounded-lg shadow-md mb-12">
              <p className="italic mb-4">&ldquo;We are partnering with innovative companies like Massdriver to help founders achieve more. As a part of Microsoft for Startups Founders Hub, startups can now receive access to Massdriver&apos;s productivity tools, designed to streamline cloud management and reduce infrastructure development time.&rdquo;</p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">Kirk Safford</p>
                  <p>Director, Microsoft for Startups</p>
                </div>
              </div>
            </blockquote>
            
            <div className="text-center">
              <p className="text-gray-700 mb-8">Built by a team of world-class cloud certified experts. Massdriver has passed rigorous CIS benchmarks for your favorite cloud&apos;s partnership network.</p>
              
              <div className="flex flex-wrap justify-center gap-8">
                <Image 
                  src="/aws-partner.png"
                  alt="AWS Certified" 
                  width={60} 
                  height={60} 
                />
                <Image 
                  src="/microsoft-startups.svg"
                  alt="Azure Certified" 
                  width={120} 
                  height={60} 
                />
                <Image 
                  src="/google-cloud.png" 
                  alt="GCP Certified" 
                  width={60} 
                  height={60} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">We&apos;re confident Massdriver will transform how your team operates. Are you ready to simplify?</h2>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Link href="/demo" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Book a Demo</Link>
              <Link href="/try-free" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium">Try Free Now</Link>
              <Link href="/newsletter" className="border border-gray-300 px-6 py-3 rounded-md font-medium">Get our Newsletter</Link>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg inline-block">
              <p className="font-medium mb-2">Need help persuading your manager?</p>
              <p className="text-xl font-bold mb-4">Cut the red tape.</p>
              <p className="mb-4">Download the Massdriver pitch deck to convince them it&apos;s time for true developer self-service.</p>
              <Link href="/pitch-deck" className="text-blue-600 font-medium">Download the pitch deck</Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Still have questions?</h2>
            <p className="mb-6">Check out our FAQs or ping us directly in our community Slack</p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/slack" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Join us on Slack</Link>
              <Link href="/faq" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium">View the FAQ</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <p className="font-medium text-gray-700">System Operational</p>
            </div>
            <div>
              <Image 
                src="/logo.svg" 
                alt="Massdriver Logo" 
                width={140} 
                height={30} 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold mb-4">Marketplace</h3>
              <ul className="space-y-2">
                <li><Link href="/aws" className="hover:text-blue-600">AWS</Link></li>
                <li><Link href="/azure" className="hover:text-blue-600">Azure</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Templates</h3>
              <ul className="space-y-2">
                <li><Link href="/aws-templates" className="hover:text-blue-600">AWS</Link></li>
                <li><Link href="/gcp-templates" className="hover:text-blue-600">GCP</Link></li>
                <li><Link href="/azure-templates" className="hover:text-blue-600">Azure</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link href="/developer-self-service" className="hover:text-blue-600">Developer Self Service</Link></li>
                <li><Link href="/opentofu-enterprise" className="hover:text-blue-600">OpenTofu for Enterprise</Link></li>
                <li><Link href="/platform-engineering" className="hover:text-blue-600">Platform Engineering Accelerator</Link></li>
                <li><Link href="/cost-management" className="hover:text-blue-600">Cost Management</Link></li>
              </ul>
              
              <h3 className="font-bold mt-6 mb-4">Comparisons</h3>
              <ul className="space-y-2">
                <li><Link href="/backstage-alternative" className="hover:text-blue-600">Backstage Alternative</Link></li>
                <li><Link href="/spacelift-vs-massdriver" className="hover:text-blue-600">Spacelift vs Massdriver</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
                <li><Link href="/jobs" className="hover:text-blue-600">Jobs</Link></li>
                <li><Link href="/news" className="hover:text-blue-600">News</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600">Contact Us</Link></li>
                <li><Link href="/news" className="hover:text-blue-600">News</Link></li>
              </ul>
              
              <h3 className="font-bold mt-6 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
                <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
                <li><Link href="/docs" className="hover:text-blue-600">Docs</Link></li>
                <li><Link href="/webinars" className="hover:text-blue-600">Webinars</Link></li>
                <li><Link href="/pitch-deck" className="hover:text-blue-600">Pitch Deck</Link></li>
                <li><Link href="/faq" className="hover:text-blue-600">FAQ</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/trial" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-block mb-8">Start Free Trial</Link>
            
            <div className="mb-8">
              <h3 className="font-bold mb-4">Massdriver Reviews</h3>
              <Link href="/reviews" className="text-blue-600">Massdriver Reviews</Link>
            </div>
            
            <div className="text-sm text-gray-600">
              <p>© Massdriver, Inc. 2024</p>
              <div className="flex justify-center space-x-4 mt-2">
                <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
                <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
                <Link href="/security" className="hover:text-blue-600">Security</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
