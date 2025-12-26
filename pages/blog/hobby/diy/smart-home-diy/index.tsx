import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SmartHomeDiy() {
  return (
    <>
      <Head>
        <title>Smart Home DIY: Build Your Own Automated Lighting System | Hobby Dimension</title>
        <meta name="description" content="Step-by-step guide to creating a custom smart lighting solution using Arduino and IoT sensors." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/hobby/diy" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8">
            <span className="mr-2">←</span>
            Back to DIY Projects
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-orange-700/50 p-8">
            <header className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl mr-4">
                  🔨
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Smart Home DIY: Build Your Own Automated Lighting System
                  </h1>
                  <div className="flex items-center text-gray-400 text-sm mt-2">
                    <span>By Maker Alex Workshop</span>
                    <span className="mx-2">•</span>
                    <span>Dec 21, 2025</span>
                    <span className="mx-2">•</span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                Creating your own smart lighting system doesn't require expensive commercial solutions. With some basic electronics knowledge and affordable components, you can build a fully customizable automated lighting system that responds to your needs and preferences.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">What You'll Need</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Arduino Uno or compatible board</li>
                <li>Relay module (4-channel recommended)</li>
                <li>Temperature and light sensors</li>
                <li>WiFi module (ESP8266 or similar)</li>
                <li>Prototyping board and jumper wires</li>
                <li>Electrical boxes and mounting hardware</li>
                <li>Basic hand tools</li>
              </ul>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Step 1: Planning Your System</h2>
              <p className="mb-4">
                Before diving into the electronics, plan your lighting zones. Consider which rooms need automated lighting and what triggers will control them. Common triggers include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Time of day (dusk/dawn simulation)</li>
                <li>Occupancy sensors</li>
                <li>Temperature thresholds</li>
                <li>Manual override switches</li>
              </ul>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Step 2: Building the Control Circuit</h2>
              <p className="mb-4">
                The heart of your system is the Arduino microcontroller. Connect your relay module to control the power to your lights, and connect sensors to read environmental conditions. The relay module acts as an electronic switch, allowing the low-voltage Arduino to control high-voltage lighting circuits safely.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Step 3: Programming</h2>
              <p className="mb-4">
                Write your Arduino code to read sensor inputs and control the relays accordingly. You can implement sophisticated logic such as:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Gradual dimming at sunset</li>
                <li>Automatic shutoff after a period of inactivity</li>
                <li>Temperature-responsive lighting (cooler tones when it's hot)</li>
                <li>Integration with smartphone apps via WiFi</li>
              </ul>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Safety Considerations</h2>
              <p className="mb-4">
                When working with mains voltage, safety is paramount. Always:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Turn off power at the breaker before making connections</li>
                <li>Use proper electrical enclosures rated for your voltage</li>
                <li>Test all connections before energizing the circuit</li>
                <li>Consider having a qualified electrician review your installation</li>
              </ul>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Advanced Features</h2>
              <p className="mb-4">
                Once your basic system is operational, consider adding advanced features:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Voice control integration</li>
                <li>Mobile app with scheduling</li>
                <li>Integration with weather services</li>
                <li>Energy monitoring and reporting</li>
              </ul>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Conclusion</h2>
              <p className="mb-8">
                Building your own smart lighting system is a rewarding project that combines electronics, programming, and practical home improvement. The skills you learn can be applied to other home automation projects, making this an excellent entry point into the world of IoT.
              </p>

              <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-xl p-6 mb-8 border border-orange-700/30">
                <h2 className="text-2xl font-bold text-orange-400 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: Is it safe to work with mains voltage for DIY lighting?</h3>
                    <p className="text-gray-300">A: While it's possible to do safely, we strongly recommend having a qualified electrician handle any connections to your home's electrical panel. You can work on the control circuits safely, but leave the high-voltage connections to professionals.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: How much does it cost to build a basic smart lighting system?</h3>
                    <p className="text-gray-300">A: A basic single-zone system can cost between $50-100, while a whole-home system with multiple zones might cost $300-800 depending on the number of lights and complexity.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: Can I integrate my DIY system with existing smart home platforms?</h3>
                    <p className="text-gray-300">A: Yes, with additional programming you can integrate with platforms like Home Assistant, OpenHAB, or even create interfaces to work with commercial systems like Philips Hue.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 mb-8 border border-blue-700/30">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">DIY Smart Home Quiz</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white mb-2">1. What is the primary function of a relay in a smart lighting system?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) To dim the lights</li>
                      <li>b) To convert AC to DC power</li>
                      <li>c) To act as an electronic switch for high-voltage circuits</li>
                      <li>d) To measure light intensity</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: c) To act as an electronic switch for high-voltage circuits</p>
                  </div>
                  <div className="pt-4">
                    <p className="font-medium text-white mb-2">2. Which component allows your smart lighting system to connect to WiFi?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) Arduino Uno</li>
                      <li>b) Relay module</li>
                      <li>c) ESP8266 or similar WiFi module</li>
                      <li>d) Temperature sensor</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: c) ESP8266 or similar WiFi module</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-xl p-6 mb-8 border border-green-700/30">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Expert Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Always use proper electrical enclosures rated for your voltage</li>
                  <li>Start with a single zone to test your design before expanding</li>
                  <li>Consider future expansion when planning your initial design</li>
                  <li>Document your wiring and code for future maintenance</li>
                  <li>Implement manual override switches for safety and convenience</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-xl p-6 mb-8 border border-yellow-700/30">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Resources & Tools</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><a href="#" className="text-orange-400 hover:text-orange-300">Arduino IDE - Free programming environment</a></li>
                  <li><a href="#" className="text-orange-400 hover:text-orange-300">Fritzing - Circuit design and breadboard visualization</a></li>
                  <li><a href="#" className="text-orange-400 hover:text-orange-300">Home Assistant - Open-source home automation platform</a></li>
                  <li><a href="#" className="text-orange-400 hover:text-orange-300">Electronics distributors for components</a></li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-orange-700/50">
                <p className="mb-4">
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#SmartHome</span>
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#DIYElectronics</span>
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Arduino</span>
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#IoT</span>
                </p>
              </div>
            </div>
          </article>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/hobby/diy"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
            >
              ← Back to DIY Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}