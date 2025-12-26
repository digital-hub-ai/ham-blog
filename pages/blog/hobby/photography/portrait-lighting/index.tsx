import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PortraitLighting() {
  return (
    <>
      <Head>
        <title>Portrait Lighting: Creating Mood and Emotion | Hobby Dimension</title>
        <meta name="description" content="Master the art of lighting for portrait photography to create compelling and evocative images." />
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
                Portrait Lighting: Creating Mood and Emotion
              </h1>
              <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
                <span className="mr-4">By Artist Taylor Frame</span>
                <span className="mr-4">Dec 20, 2025</span>
                <span>18 min read</span>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6"></div>
            </header>

            <section className="prose prose-invert max-w-none mb-10">
              <p className="text-xl text-gray-300 mb-6">
                Portrait photography is fundamentally about capturing the essence of a person, and lighting is the key to revealing their character, mood, and emotions. Understanding how to manipulate light allows you to create images that resonate deeply with viewers, transforming a simple photograph into a powerful narrative.
              </p>

              <h2 className="text-2xl font-bold text-violet-300 mt-10 mb-4">Understanding Light Quality</h2>
              <p>
                The quality of light in portrait photography refers to its hardness or softness, which dramatically affects the mood and appearance of your subject. Hard light creates sharp, defined shadows and high contrast, while soft light produces gradual transitions between highlights and shadows.
              </p>
              
              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Hard vs. Soft Light</h3>
              <p>
                Hard light, created by small light sources relative to the subject, emphasizes texture and creates dramatic shadows. This type of lighting is often used for masculine portraits or to convey strength and determination. Soft light, produced by larger light sources, flatters most subjects by minimizing skin imperfections and creating a more even illumination.
              </p>

              <h2 className="text-2xl font-bold text-violet-300 mt-10 mb-4">Classic Portrait Lighting Patterns</h2>
              <p>
                Portrait photographers have developed time-tested lighting patterns that create flattering and aesthetically pleasing results. Each pattern serves different purposes and can be adapted to complement your subject's facial features.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Rembrandt Lighting</h3>
              <p>
                Named after the famous painter, this lighting pattern creates a triangle of light on the shadowed side of the face. It's achieved by positioning the key light at a 45-degree angle above and to the side of the subject, slightly higher than eye level. This creates a small triangle of light under the eye on the shadowed side of the face.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Butterfly Lighting</h3>
              <p>
                Also known as "Paramount lighting," this pattern places the main light directly in front of the subject, slightly above eye level. It creates a distinctive butterfly-shaped shadow under the nose, which is flattering for subjects with high cheekbones and straight noses. This style is popular in fashion and glamour photography.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Loop Lighting</h3>
              <p>
                A versatile lighting pattern that creates a small loop of shadow from the nose to the side of the face. Position the key light at a 45-degree angle from the subject, slightly higher than eye level. This is considered the most universally flattering lighting pattern and works well for most face shapes.
              </p>

              <h2 className="text-2xl font-bold text-violet-300 mt-10 mb-4">Natural Light Portrait Techniques</h2>
              <p>
                Natural light offers a beautiful, authentic quality that many photographers prefer for portraits. Understanding how to work with available light can produce stunning results without complex equipment.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Golden Hour Magic</h3>
              <p>
                The hour after sunrise and before sunset provides warm, soft light that is ideal for portraits. The low angle of the sun creates long shadows and even illumination. Position your subject with the sun behind them for a beautiful rim light effect, or use it as a key light for warm, glowing portraits.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Window Light Mastery</h3>
              <p>
                Large windows provide beautiful soft light that can be controlled by adjusting the distance between your subject and the window. North-facing windows provide consistent, even light throughout the day. On overcast days, any window becomes a soft box, providing even illumination with minimal shadows.
              </p>

              <h2 className="text-2xl font-bold text-violet-300 mt-10 mb-4">Artificial Lighting Setups</h2>
              <p>
                When natural light isn't available or doesn't provide the desired effect, artificial lighting gives you complete control over the lighting in your portraits.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">Three-Point Lighting</h3>
              <p>
                The foundation of studio portrait lighting, this setup uses three distinct lights: the key light (main light), fill light (reduces shadows), and back light (separates subject from background). The key light is the primary source, typically placed at a 45-degree angle to the subject. The fill light is positioned on the opposite side to soften shadows, and the back light illuminates the subject from behind.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">One-Light Setup</h3>
              <p>
                For simplicity and portability, a single light source can create stunning portraits. This setup relies on reflectors and the environment to bounce light back into shadow areas. A single large softbox or umbrella positioned correctly can produce professional results with minimal equipment.
              </p>
            </section>

            <div className="bg-gradient-to-r from-violet-900/50 to-purple-900/50 rounded-xl p-6 mb-10 border border-violet-700/50">
              <h3 className="text-xl font-bold text-violet-300 mb-4">Expert Tips for Portrait Lighting</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Always position the light source at or slightly above eye level to create the most flattering results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Pay attention to the catchlights in your subject's eyes - they should be bright and well-defined</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Use reflectors to bounce light into shadow areas and reduce contrast</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Consider the color temperature of your lights to ensure consistent skin tones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Test your lighting setup before shooting to ensure even illumination and proper exposure</span>
                </li>
              </ul>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-violet-300 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-violet-800/50 pb-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">What is the best lighting for beginners in portrait photography?</h3>
                  <p className="text-gray-300">Natural light from a large window is the best starting point for beginners. It's soft, even, and free of complex equipment. Position your subject near the window with the light falling across their face at a 45-degree angle.</p>
                </div>
                
                <div className="border-b border-violet-800/50 pb-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">How do I avoid harsh shadows in portrait lighting?</h3>
                  <p className="text-gray-300">Use larger light sources relative to your subject, position lights closer to create softer light, or add a fill light/reflector to illuminate shadow areas. Moving the light source closer to the subject makes it effectively larger and softer.</p>
                </div>
                
                <div className="border-b border-violet-800/50 pb-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">What is the difference between hard and soft light?</h3>
                  <p className="text-gray-300">Hard light creates sharp, well-defined shadows with high contrast, while soft light produces gradual transitions between highlights and shadows. The size of the light source relative to the subject determines the quality of light.</p>
                </div>
                
                <div className="border-b border-violet-800/50 pb-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">How do I create catchlights in my subject's eyes?</h3>
                  <p className="text-gray-300">Position your light source at eye level or slightly above, ensuring it's visible to the subject's eyes. The light source should be in front of and to the side of the subject. If using artificial lights, make sure they're not positioned directly behind the camera.</p>
                </div>
                
                <div className="border-b border-violet-800/50 pb-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">What is the golden hour and why is it important for portraits?</h3>
                  <p className="text-gray-300">Golden hour refers to the hour after sunrise and before sunset when the sun is low in the sky, creating warm, soft light. The low angle of the sun creates even illumination with minimal harsh shadows, making it ideal for flattering portraits.</p>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 mb-10 border border-violet-700/50">
              <h3 className="text-xl font-bold text-violet-300 mb-4">Interactive Quiz: Test Your Portrait Lighting Knowledge</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">1. What is the key characteristic of Rembrandt lighting?</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <input type="radio" id="q1a" name="q1" className="mr-2" />
                      <label htmlFor="q1a">A) Even illumination across the face</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q1b" name="q1" className="mr-2" />
                      <label htmlFor="q1b">B) Triangle of light under the eye on the shadowed side</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q1c" name="q1" className="mr-2" />
                      <label htmlFor="q1c">C) Butterfly-shaped shadow under the nose</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q1d" name="q1" className="mr-2" />
                      <label htmlFor="q1d">D) Rim lighting effect</label>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium mb-2">2. Which lighting pattern creates a butterfly-shaped shadow under the nose?</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <input type="radio" id="q2a" name="q2" className="mr-2" />
                      <label htmlFor="q2a">A) Loop lighting</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q2b" name="q2" className="mr-2" />
                      <label htmlFor="q2b">B) Rembrandt lighting</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q2c" name="q2" className="mr-2" />
                      <label htmlFor="q2c">C) Butterfly lighting</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q2d" name="q2" className="mr-2" />
                      <label htmlFor="q2d">D) Split lighting</label>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium mb-2">3. What are the three lights in a classic three-point lighting setup?</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <input type="radio" id="q3a" name="q3" className="mr-2" />
                      <label htmlFor="q3a">A) Key light, fill light, back light</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q3b" name="q3" className="mr-2" />
                      <label htmlFor="q3b">B) Main light, secondary light, rim light</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q3c" name="q3" className="mr-2" />
                      <label htmlFor="q3c">C) Hard light, soft light, bounce light</label>
                    </li>
                    <li className="flex items-center">
                      <input type="radio" id="q3d" name="q3" className="mr-2" />
                      <label htmlFor="q3d">D) Sun light, artificial light, reflector</label>
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
                    <a href="#" className="text-violet-300 hover:text-violet-200">Portrait Lighting Patterns Guide</a> - Visual guide to classic lighting setups
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>
                    <a href="#" className="text-violet-300 hover:text-violet-200">Natural Light Portrait Workshop</a> - Techniques for working with available light
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>
                    <a href="#" className="text-violet-300 hover:text-violet-200">Studio Lighting Equipment Guide</a> - Equipment recommendations for studio portrait work
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>
                    <a href="#" className="text-violet-300 hover:text-violet-200">Color Temperature in Portrait Photography</a> - Understanding and controlling light color
                  </span>
                </li>
              </ul>
            </section>

            <footer className="pt-6 border-t border-violet-800/50">
              <div className="flex flex-wrap justify-between items-center">
                <Link href="/blog/hobby/photography" className="text-violet-400 hover:text-violet-300">
                  ← Back to Photography
                </Link>
                <span className="text-gray-500 text-sm">© 2025 Hobby Dimension | Portrait Lighting Guide</span>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
}