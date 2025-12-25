import { Navbar } from "@/components/navbar"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import SharedFooter from "@/components/shared-footer"
import { useTheme } from "@/contexts/theme-context"


export default function DataProcessingPage() {
  return (
    
    <div className="min-h-screen bg-[#08010d]">
      
<Navbar  />
      <ChatWidget />
      <ScrollToTop />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-[#25064c]/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#836d98]/20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Data Processing Agreement</h1>
          <p className="text-gray-300 mb-8">Last Updated: January 2025</p>

          <div className="space-y-8 text-gray-200">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Purpose and Scope</h2>
              <p className="leading-relaxed">
                This Data Processing Agreement ("DPA") forms part of our service agreement and governs the processing of
                personal data on behalf of our clients. This DPA applies when Innovation Readiness Est. processes
                personal data as a data processor on behalf of clients who act as data controllers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Personal Data:</strong> Any information relating to an identified or identifiable natural
                  person
                </li>
                <li>
                  <strong>Processing:</strong> Any operation performed on personal data
                </li>
                <li>
                  <strong>Data Controller:</strong> The entity that determines the purposes and means of processing
                </li>
                <li>
                  <strong>Data Processor:</strong> The entity that processes personal data on behalf of the controller
                </li>
                <li>
                  <strong>Data Subject:</strong> The individual to whom personal data relates
                </li>
                <li>
                  <strong>Sub-processor:</strong> Third-party processor engaged by the processor
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Processing Details</h2>
              <h3 className="text-xl font-semibold text-[#836d98] mb-2">3.1 Nature and Purpose of Processing</h3>
              <p className="leading-relaxed mb-4">We process personal data to provide our services, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Software development and maintenance</li>
                <li>Cloud hosting and infrastructure services</li>
                <li>Technical support and customer service</li>
                <li>Analytics and reporting</li>
                <li>Security monitoring and incident response</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#836d98] mb-2 mt-6">3.2 Types of Personal Data</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact information (name, email, phone)</li>
                <li>Account credentials and authentication data</li>
                <li>Usage data and logs</li>
                <li>Business information</li>
                <li>Technical data (IP addresses, device information)</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#836d98] mb-2 mt-6">3.3 Categories of Data Subjects</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Customers and prospective customers</li>
                <li>Employees and contractors of customers</li>
                <li>End users of customer systems</li>
                <li>Suppliers and business partners</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Processor Obligations</h2>
              <p className="leading-relaxed mb-4">As a data processor, we commit to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process personal data only on documented instructions from the controller</li>
                <li>Ensure confidentiality of processing personnel</li>
                <li>Implement appropriate technical and organizational security measures</li>
                <li>Engage sub-processors only with prior authorization</li>
                <li>Assist with data subject rights requests</li>
                <li>Assist with data breach notifications</li>
                <li>Delete or return personal data upon termination</li>
                <li>Make available information necessary to demonstrate compliance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Security Measures</h2>
              <p className="leading-relaxed mb-4">We implement comprehensive security measures including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Encryption:</strong> Data encrypted in transit (TLS 1.3) and at rest (AES-256)
                </li>
                <li>
                  <strong>Access Controls:</strong> Role-based access with multi-factor authentication
                </li>
                <li>
                  <strong>Network Security:</strong> Firewalls, intrusion detection, and DDoS protection
                </li>
                <li>
                  <strong>Monitoring:</strong> 24/7 security monitoring and logging
                </li>
                <li>
                  <strong>Incident Response:</strong> Documented procedures for security incidents
                </li>
                <li>
                  <strong>Regular Testing:</strong> Penetration testing and vulnerability assessments
                </li>
                <li>
                  <strong>Backup and Recovery:</strong> Regular backups with disaster recovery procedures
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Sub-processors</h2>
              <p className="leading-relaxed mb-4">We may engage the following categories of sub-processors:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cloud infrastructure providers (AWS, Azure, Google Cloud)</li>
                <li>Customer support platforms</li>
                <li>Analytics and monitoring services</li>
                <li>Payment processors</li>
                <li>Email service providers</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                We maintain a current list of sub-processors and notify clients of any changes with at least 30 days'
                notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Data Subject Rights</h2>
              <p className="leading-relaxed mb-4">
                We assist clients in responding to data subject requests, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Right of Access:</strong> Providing copies of personal data
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Correcting inaccurate data
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Deleting personal data ("right to be forgotten")
                </li>
                <li>
                  <strong>Right to Restriction:</strong> Limiting processing of personal data
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Providing data in a structured format
                </li>
                <li>
                  <strong>Right to Object:</strong> Objecting to certain types of processing
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Data Breach Notification</h2>
              <p className="leading-relaxed">
                In the event of a personal data breach, we will notify the controller without undue delay and within 72
                hours of becoming aware of the breach. The notification will include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Nature of the breach and categories of data affected</li>
                <li>Likely consequences of the breach</li>
                <li>Measures taken or proposed to address the breach</li>
                <li>Contact point for further information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Data Transfers</h2>
              <p className="leading-relaxed mb-4">
                For international data transfers, we ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Adequacy decisions by relevant authorities</li>
                <li>Binding Corporate Rules where applicable</li>
                <li>Additional measures as required by applicable law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Audits and Inspections</h2>
              <p className="leading-relaxed">
                We allow for audits and inspections by the controller or an authorized auditor. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Annual SOC 2 Type II reports</li>
                <li>ISO 27001 certification documentation</li>
                <li>Security questionnaires and assessments</li>
                <li>On-site audits upon reasonable notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Data Retention and Deletion</h2>
              <p className="leading-relaxed">Upon termination of services, we will:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Return all personal data to the controller in a commonly used format</li>
                <li>Delete all copies of personal data unless required by law to retain</li>
                <li>Provide certification of deletion upon request</li>
                <li>Complete data deletion within 90 days of termination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Liability and Indemnification</h2>
              <p className="leading-relaxed">
                Each party is liable for damages caused by processing that violates applicable data protection laws. The
                processor is liable only for damages caused by failure to comply with processor-specific obligations or
                acting outside lawful instructions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <p className="leading-relaxed mb-4">For questions about data processing:</p>
              <div className="bg-[#25064c]/50 p-6 rounded-lg">
                <p className="mb-2">
                  <strong>Data Protection Officer:</strong> dpo@innovationreadiness.com
                </p>
                <p className="mb-2">
                  <strong>Privacy Team:</strong> privacy@innovationreadiness.com
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> +966 XX XXX XXXX
                </p>
                <p>
                  <strong>Address:</strong> Riyadh, Saudi Arabia
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <SharedFooter  />
    </div>
  )
}
