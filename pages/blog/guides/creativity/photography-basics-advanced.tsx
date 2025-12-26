import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PhotographyBasicsAdvanced() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
      <Head>
        <title>Photography: From Basics to Advanced Techniques | Knowledge Compendium</title>
        <meta name="description" content="Master the technical and artistic aspects of photography to create stunning visual content." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-green-700/50 p-8">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-700/50">
                Photography
              </span>
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-700/50 ml-2">
                Basics
              </span>
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-700/50 ml-2">
                Advanced
              </span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Photography: From Basics to Advanced Techniques
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center text-gray-400 mb-6">
              <span className="mb-2 sm:mb-0 sm:mr-4">By Photographer Jordan Lens</span>
              <span className="mx-2 hidden sm:block">|</span>
              <span>Dec 20, 2025</span>
              <span className="mx-2 hidden sm:block">|</span>
              <span>26 min read</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              Photography is both a technical craft and an artistic expression that allows you to capture and share the world as you see it. This comprehensive guide will take you from fundamental camera operation to advanced techniques for creating stunning visual content in 2025 and beyond.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Understanding Your Camera</h2>
            <p>
              Whether you're using a smartphone, point-and-shoot, or DSLR/mirrorless camera, understanding the fundamental controls is essential. The three pillars of photography - aperture, shutter speed, and ISO - work together to control exposure and create different visual effects.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">The Exposure Triangle</h2>
            <p>
              Mastering the relationship between aperture, shutter speed, and ISO is fundamental to photography:
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">1. Aperture</h3>
            <p>
              Aperture controls the size of the lens opening and affects both exposure and depth of field. A wide aperture (small f-number) creates a shallow depth of field, isolating subjects from backgrounds. A narrow aperture (large f-number) increases depth of field, keeping more of the scene in focus.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">2. Shutter Speed</h3>
            <p>
              Shutter speed determines how long the camera sensor is exposed to light. Fast shutter speeds freeze motion, while slow speeds can create motion blur. Shutter speed also affects how sharp your images are when shooting handheld.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">3. ISO</h3>
            <p>
              ISO controls the camera sensor's sensitivity to light. Lower ISO values (100-400) produce cleaner images with less noise, while higher values (1600+) allow shooting in low light but may introduce digital noise. Modern cameras handle higher ISO values much better than older models.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Composition Techniques</h2>
            <p>
              Beyond technical settings, composition determines how visually appealing your photos are:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Rule of Thirds:</strong> Divide your frame into nine equal parts and place important elements along these lines or at their intersections</li>
              <li><strong>Leading Lines:</strong> Use natural or architectural lines to guide the viewer's eye through the image</li>
              <li><strong>Framing:</strong> Use elements in the foreground to frame your main subject</li>
              <li><strong>Symmetry and Patterns:</strong> Look for symmetrical compositions or repeating patterns that create visual interest</li>
              <li><strong>Depth:</strong> Include foreground, middle ground, and background elements to create a sense of depth</li>
              <li><strong>Viewpoint:</strong> Experiment with different angles and heights to create more dynamic compositions</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Lighting Fundamentals</h2>
            <p>
              Light is photography's most important element. Understanding how light affects your subjects and how to work with different lighting conditions will dramatically improve your images. The quality, direction, and color of light all contribute to the mood and impact of your photographs.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Advanced Photography Techniques</h2>
            <p>
              Once you've mastered the basics, these advanced techniques can take your photography to the next level:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Long Exposure:</strong> Create smooth water effects, light trails, and remove moving objects</li>
              <li><strong>High Dynamic Range (HDR):</strong> Combine multiple exposures to capture detail in both shadows and highlights</li>
              <li><strong>Focal Length Compositing:</strong> Take multiple shots at different focal lengths to create wide-angle perspectives</li>
              <li><strong>Focus Stacking:</strong> Combine multiple images with different focus points for maximum sharpness</li>
              <li><strong>Flash Photography:</strong> Use artificial light to enhance or completely control lighting</li>
              <li><strong>Time-lapse and Cinemagraphs:</strong> Create dynamic sequences from still images</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Post-Processing and Editing</h2>
            <p>
              Modern photography extends into post-processing, where you can enhance your images and realize your creative vision. Software like Adobe Lightroom and Photoshop allows for non-destructive editing, color correction, and creative effects while maintaining image quality.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Different Photography Genres</h2>
            <p>
              Each photography genre has its own techniques and requirements:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Portrait:</strong> Focus on connecting with subjects and capturing their personality</li>
              <li><strong>Landscape:</strong> Emphasize composition, timing, and the relationship between elements</li>
              <li><strong>Street:</strong> Develop observation skills and the ability to capture candid moments</li>
              <li><strong>Macro:</strong> Master focus and lighting for close-up details</li>
              <li><strong>Sports/Wildlife:</strong> Require fast shutter speeds and predictive focusing</li>
              <li><strong>Architecture:</strong> Emphasize lines, patterns, and the interplay of light and structure</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Best Practices for Photographers</h2>
            <p>
              As you develop your photography skills, keep the following best practices in mind:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Always carry your camera or know how to access your phone camera quickly</li>
              <li>Shoot in RAW format when possible for maximum editing flexibility</li>
              <li>Protect your gear and have backup equipment for important shoots</li>
              <li>Backup your images immediately after shooting</li>
              <li>Study the work of photographers you admire to understand their techniques</li>
              <li>Practice regularly and don't be afraid to experiment</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">FAQs</h2>
            <div className="space-y-4 mt-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-lg">Q: What's the difference between DSLR and mirrorless cameras?</h3>
                <p className="mt-2">A: DSLRs use a mirror mechanism to direct light to an optical viewfinder, while mirrorless cameras use an electronic viewfinder. Mirrorless cameras are generally smaller and offer better video capabilities, while DSLRs often have better battery life and a wider selection of lenses.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-lg">Q: When should I use manual mode versus automatic modes?</h3>
                <p className="mt-2">A: Use manual mode when you need precise control over exposure or when lighting conditions are consistent. Automatic and semi-automatic modes (Aperture Priority, Shutter Priority) are useful when lighting changes frequently or when you need to react quickly to capture a moment.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-lg">Q: How can I improve my photography without buying expensive gear?</h3>
                <p className="mt-2">A: Focus on understanding light, composition, and timing. Study the work of other photographers, practice regularly, learn post-processing techniques, and experiment with different perspectives. Better gear helps, but skill and vision matter more.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Interactive Quiz</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-green-700/30 mt-4">
              <p className="font-bold mb-3">Test your knowledge:</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <input type="checkbox" id="q1" className="mt-1 mr-2" />
                  <label htmlFor="q1">What are the three elements of the exposure triangle?</label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="q2" className="mt-1 mr-2" />
                  <label htmlFor="q2">What does the rule of thirds involve?</label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="q3" className="mt-1 mr-2" />
                  <label htmlFor="q3">What is the difference between wide and narrow aperture?</label>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg transition-colors">
                Check Answers
              </button>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Expert Tips</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-green-700/30 mt-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Shoot during golden hour (sunrise/sunset) for the most flattering light</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Fill the frame with your subject to create more impactful images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Use a tripod for sharper images, especially in low light</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Check your camera's histogram to ensure proper exposure</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Resources</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><a href="#" className="text-green-400 hover:underline">Photography Tutorials and Courses</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Camera and Lens Reviews</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Post-Processing Software Tutorials</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Photography Communities and Critiques</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Lightroom Presets and Photoshop Actions</a></li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <Link 
                href="/blog/guides/creativity"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300"
              >
                ← Back to Creative Skills
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}