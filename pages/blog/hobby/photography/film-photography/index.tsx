import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FilmPhotography() {
  return (
    <>
      <Head>
        <title>Film Photography: Rediscovering the Art of Analog Capture | Hobby Dimension</title>
        <meta name="description" content="Explore the unique aesthetics and techniques of film photography in the digital age." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/hobby/photography" className="inline-flex items-center text-violet-400 hover:text-violet-300 mb-8">
            <span className="mr-2">←</span>
            Back to Photography
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-violet-700/50 p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Film Photography: Rediscovering the Art of Analog Capture
              </h1>
              <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
                <span className="mr-4">By Analog Specialist Casey Film</span>
                <span className="mr-4">Dec 19, 2025</span>
                <span>17 min read</span>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6"></div>
            </header>

            <section className="prose prose-invert max-w-none mb-10">
              <p className="text-xl text-gray-300 mb-6">
                In an era dominated by digital photography, film photography offers a unique and rewarding alternative that emphasizes the craft and artistry of image-making. The deliberate process of shooting film, with its limited exposures and delayed gratification of seeing results, encourages more thoughtful composition and technical precision.
              </p>

              <h2 className="text-2xl font-bold text-violet-300 mt-10 mb-4">Understanding Film Types and Characteristics</h2>
              <p>
                Film photography offers a variety of options, each with distinct characteristics that affect the final image. Understanding these differences is crucial to achieving your desired aesthetic and technical results.
              </p>
              
              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Color Negative Film (C-41)</h3>
              <p>
                Color negative film is the most common type of color film, known for its exposure latitude and forgiving nature. It produces a negative image with an orange mask that is later corrected during printing or scanning. Popular for its vibrant colors and ability to handle exposure variations.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Slide Film (E-6)</h3>
              <p>
                Slide film, also known as reversal film, creates a positive image directly on the film. It's known for its rich, saturated colors and high contrast. Slide film requires more precise exposure compared to negative film, but produces stunning results with excellent color accuracy and sharpness.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Black and White Film</h3>
              <p>
                Black and white film offers a wide range of tonal possibilities and remains popular for its timeless aesthetic. Different films provide varying contrast levels and grain structures, allowing photographers to match the film to their subject matter and artistic vision.
              </p>

              <h2 className="text-2xl font-bold text-violet-300 mt-10 mb-4">Choosing Your First Film Camera</h2>
              <p>
                The world of film cameras is vast, ranging from simple point-and-shoot models to sophisticated manual SLRs. For beginners, selecting the right camera can make the difference between an enjoyable hobby and a frustrating experience.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">35mm SLR Cameras</h3>
              <p>
                35mm SLR cameras offer the most versatility for learning film photography. Models like the Canon AE-1, Nikon FM2, or Pentax K1000 provide full manual control, allowing you to learn fundamental photography skills. The 35mm format is widely supported with numerous labs offering processing and scanning services.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Point-and-Shoot Cameras</h3>
              <p>
                For those wanting to focus on composition and creativity rather than technical controls, automatic point-and-shoot cameras provide a simpler entry into film photography. These cameras handle exposure automatically, allowing you to concentrate on what you're photographing rather than camera settings.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Medium Format Cameras</h3>
              <p>
                Medium format cameras use 120 film and produce larger negatives than 35mm, resulting in higher resolution and less visible grain. These cameras offer exceptional image quality but are typically more expensive and bulkier than 35mm options. Twin-lens reflex (TLR) and single-lens reflex (SLR) medium format cameras each offer unique advantages.
              </p>

              <h2 className="text-2xl font-bold text-violet-300 mt-10 mb-4">Exposure Techniques for Film</h2>
              <p>
                Film has different exposure characteristics compared to digital sensors, requiring specific techniques to maximize image quality. Understanding how to expose for film is essential for consistent results.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Exposing for Film vs. Digital</h3>
              <p>
                Color negative film is more forgiving of overexposure, so many photographers "expose to the right" by slightly overexposing to capture more information in shadows. Slide film, however, is less forgiving of overexposure, requiring more precise exposure to preserve highlight detail.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Metering Techniques</h3>
              <p>
                Understanding how your camera's meter works is crucial for film photography. Most meters aim for middle gray (18% reflectance), which works well for average scenes. For subjects with unusual brightness, you may need to compensate by adjusting your exposure settings.
              </p>

              <h2 className="text-2xl font-bold text-violet-300 mt-10 mb-4">Film Scanning and Digitization</h2>
              <p>
                After your film is processed, you'll need to digitize your images to share and edit them. The scanning method you choose affects the quality and usability of your final images.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Professional Scanning Services</h3>
              <p>
                Professional labs offer high-quality scanning with specialized equipment that can extract maximum detail from your negatives or slides. Services range from basic scanning to high-resolution scanning with digital restoration. This option provides the best results but comes at a higher cost.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">DIY Scanning</h3>
              <p>
                For budget-conscious photographers, scanning your own film is a viable option. This can be done with flatbed scanners with transparency adapters or dedicated film scanners. While requiring more effort, DIY scanning gives you complete control over the scanning process and can be more cost-effective for high-volume shooters.
              </p>
            </section>

            <div className="bg-gradient-to-r from-violet-900/50 to-purple-900/50 rounded-xl p-6 mb-10 border border-violet-700/50">
              <h3 className="text-xl font-bold text-violet-300 mb-4">Expert Tips for Film Photography</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Shoot with intention - each frame costs money, so take time to compose thoughtfully</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Keep a film log to track exposures, cameras, and results for learning and improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Store film in a cool, dry place - refrigerator storage can extend film life significantly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Start with ISO 400 film for versatility in various lighting conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Learn to read light meters and understand exposure triangle fundamentals</span>
                </li>
              </ul>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-violet-300 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-violet-800/50 pb-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Is film photography still relevant in the digital age?</h3>
                  <p className="text-gray-300">Absolutely! Film photography offers unique aesthetic qualities and a different creative process that many photographers find rewarding. The deliberate nature of film encourages more thoughtful image-making and technical understanding of photography fundamentals.</p>
                </div>
                
                <div className="border-b border-violet-800/50 pb-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">How much does it cost to get started with film photography?</h3>
                  <p className="text-gray-300">Initial costs include a camera ($50-300 for a good used 35mm SLR) and film/processing costs ($5-10 per roll including scanning). A roll of 36 exposures costs approximately $5-15, with processing adding another $5-10 depending on the service.</p>
                </div>
                
                <div className="border-b border-violet-800/50 pb-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">What's the difference between color negative and slide film?</h3>
                  <p className="text-gray-300">Color negative film produces a negative image with an orange mask and is more forgiving of exposure errors. Slide film creates a positive image directly and has higher contrast and saturation, but requires more precise exposure.</p>
                </div>
                
                <div className="border-b border-violet-800/50 pb-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">How do I store film to keep it fresh?</h3>
                  <p className="text-gray-300">Store unexposed film in a cool, dry place. Refrigeration is ideal for long-term storage, but allow film to reach room temperature before loading to prevent condensation. Avoid temperature fluctuations and high humidity.</p>
                </div>
                
                <div className="border-b border-violet-800/50 pb-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Can I use digital techniques like focus stacking with film?</h3>
                  <p className="text-gray-300">Focus stacking is more challenging with film due to the fixed nature of each exposure, but it's possible with careful technique. However, the shallow depth of field challenges are less common with film cameras due to typically wider apertures used.</p>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 mb-10 border border-violet-700/50">
              <h3 className="text-xl font-bold text-violet-300 mb-4">Interactive Quiz: Test Your Film Photography Knowledge</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">1. What does C-41 refer to in film photography?</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <input type="radio" id="q1a" name="q1" className="mr-2" />
                      <label htmlFor="q1a">A) A type of camera</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q1b" name="q1" className="mr-2" />
                      <label htmlFor="q1b">B) A color negative film process</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q1c" name="q1" className="mr-2" />
                      <label htmlFor="q1c">C) A film speed</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q1d" name="q1" className="mr-2" />
                      <label htmlFor="q1d">D) A scanning resolution</label>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium mb-2">2. Which film type is known for its exposure latitude and forgiving nature?</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <input type="radio" id="q2a" name="q2" className="mr-2" />
                      <label htmlFor="q2a">A) Slide film</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q2b" name="q2" className="mr-2" />
                      <label htmlFor="q2b">B) Black and white film</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q2c" name="q2" className="mr-2" />
                      <label htmlFor="q2c">C) Color negative film</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q2d" name="q2" className="mr-2" />
                      <label htmlFor="q2d">D) Infrared film</label>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium mb-2">3. What does "exposing to the right" mean in film photography?</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <input type="radio" id="q3a" name="q3" className="mr-2" />
                      <label htmlFor="q3a">A) Positioning the subject on the right side of the frame</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q3b" name="q3" className="mr-2" />
                      <label htmlFor="q3b">B) Slightly overexposing to capture more information in shadows</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q3c" name="q3" className="mr-2" />
                      <label htmlFor="q3c">C) Using a right-angle viewfinder</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q3d" name="q3" className="mr-2" />
                      <label htmlFor="q3d">D) Using only right-handed camera controls</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-violet-300 mb-4">Recommended Resources</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>
                    <a href="#" className="text-violet-300 hover:text-violet-200">The Film Photography Project</a> - Community and resources for film photographers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>
                    <a href="#" className="text-violet-300 hover:text-violet-200">Film Camera Buying Guide</a> - Comprehensive guide to selecting your first film camera
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>
                    <a href="#" className="text-violet-300 hover:text-violet-200">Film Developing at Home</a> - Complete guide to developing film in your own darkroom
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>
                    <a href="#" className="text-violet-300 hover:text-violet-200">Film Scanner Recommendations</a> - Guide to digitizing your film negatives
                  </span>
                </li>
              </ul>
            </section>

            <footer className="pt-6 border-t border-violet-800/50">
              <div className="flex flex-wrap justify-between items-center">
                <Link href="/blog/hobby/photography" className="text-violet-400 hover:text-violet-300">
                  ← Back to Photography
                </Link>
                <span className="text-gray-500 text-sm">© 2025 Hobby Dimension | Film Photography Guide</span>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
}