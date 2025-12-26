import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function EnvironmentalWellness() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>Environmental Wellness: Living in Harmony with Nature | Discovery Nexus</title>
        <meta name="description" content="Creating healthy living spaces and sustainable practices that support personal well-being while protecting the planet for future generations." />
        <meta name="keywords" content="environmental wellness, sustainability, eco-friendly living, green spaces, climate health" />
        <meta name="author" content="Eco Wellness Expert Dr. Green Life" />
        <link rel="canonical" href="https://yourdomain.com/blog/lifestyle/wellness/environmental-wellness" />
      </Head>

      {/* Header */}
      <header className="bg-gradient-to-r from-green-900 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center mb-4">
            <Link href="/blog/lifestyle/wellness" className="text-teal-300 hover:text-white mr-4">
              ← Back to Wellness
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Environmental Wellness: Living in Harmony with Nature</h1>
          <div className="flex flex-wrap items-center text-teal-200">
            <span className="mr-4">By Eco Wellness Expert Dr. Green Life</span>
            <span className="mr-4">Published Dec 6, 2025</span>
            <span>13 min read</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Creating healthy living spaces and sustainable practices that support personal well-being while protecting the planet for future generations.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mb-8">
            <p className="text-lg italic">
              "Environmental wellness recognizes that human health and planetary health are inseparable—we thrive when we live in harmony with the natural systems that sustain all life." - Eco Wellness Expert Dr. Green Life
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Connection Between Environment and Health</h2>
          
          <p className="mb-6">
            Environmental factors influence 25-30% of all diseases, with air quality, water purity, and chemical exposures significantly impacting respiratory health, cognitive function, and chronic disease risk. Indoor air pollution, often 2-5 times worse than outdoor air, results from cleaning products, furniture off-gassing, and inadequate ventilation.
          </p>

          <p className="mb-6">
            Biophilic design incorporates natural elements into built environments to support human well-being. Exposure to natural light, plants, water features, and natural materials reduces stress, enhances creativity, and improves cognitive performance. Even views of nature from windows provide measurable health benefits.
          </p>

          <p className="mb-6">
            Climate change poses direct and indirect health threats including heat stress, vector-borne diseases, food insecurity, and mental health impacts from displacement and ecological grief. Personal environmental actions, while insufficient alone, contribute to collective solutions while modeling responsible stewardship.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Creating Healthy Indoor Spaces</h2>
          
          <p className="mb-6">
            Air purification through houseplants, HEPA filters, and proper ventilation reduces allergens, pathogens, and chemical pollutants. NASA research identified plants like spider plants, peace lilies, and snake plants that effectively remove toxins like formaldehyde and benzene from indoor air.
          </p>

          <p className="mb-6">
            Natural lighting regulates circadian rhythms, supporting healthy sleep-wake cycles and hormone production. Maximizing daylight through window placement, skylights, and reflective surfaces reduces dependence on artificial lighting while improving mood and energy levels.
          </p>

          <p className="mb-6">
            Non-toxic materials for furniture, paint, and cleaning products minimize chemical exposures that can disrupt endocrine function and cause respiratory irritation. Choosing items with third-party certifications like GREENGUARD or Cradle to Cradle ensures lower emissions and safer ingredients.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sustainable Lifestyle Practices</h2>
          
          <p className="mb-6">
            Waste reduction through the 5 R's—refuse, reduce, reuse, recycle, rot—minimizes environmental impact while often saving money and reducing clutter. Starting with refusing single-use items and reducing consumption creates the most significant positive change.
          </p>

          <p className="mb-6">
            Sustainable transportation choices like walking, cycling, public transit, and electric vehicles reduce carbon emissions while providing health benefits. Active transportation increases physical activity, while reduced car dependency decreases air pollution in communities.
          </p>

          <p className="mb-6">
            Conscious consumption considers the full lifecycle of products from raw material extraction to disposal. Choosing durable, repairable items over disposable ones, supporting companies with strong environmental policies, and buying local when possible reduces environmental impact.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Connecting with the Natural World</h2>
          
          <p className="mb-6">
            Time in nature, known as "forest bathing" in Japan, reduces cortisol levels, blood pressure, and stress hormones while boosting immune function and creativity. Even 20-30 minutes in a park or garden provides measurable benefits, with longer immersion offering greater restoration.
          </p>

          <p className="mb-6">
            Gardening connects people with food production while providing physical activity, stress relief, and nutrient-rich produce. Container gardening makes cultivation possible in small spaces, while community gardens build social connections alongside environmental stewardship.
          </p>

          <p className="mb-6">
            Seasonal awareness aligns daily rhythms with natural cycles, supporting physical and mental health. Adjusting sleep schedules, activity levels, and food choices to seasonal changes honors evolutionary adaptations while fostering appreciation for natural rhythms.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Advocacy and Community Action</h2>
          
          <p className="mb-6">
            Environmental advocacy amplifies individual actions through collective impact. Voting for leaders who prioritize environmental protection, supporting environmental organizations, and participating in local government meetings creates systemic change that individual actions cannot achieve alone.
          </p>

          <p className="mb-6">
            Community initiatives like tool libraries, clothing swaps, community solar projects, and neighborhood composting programs multiply environmental benefits while building social connections. Collective action reduces costs and increases participation in sustainable practices.
          </p>

          <p className="mb-6">
            Education and mentorship spread environmental awareness and skills to others. Teaching children about nature, sharing sustainable living tips with friends, or volunteering for environmental organizations multiplies positive impact beyond personal actions.
          </p>

          <div className="bg-gray-100 p-6 my-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Environmental Wellness Actions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve indoor air quality with plants and ventilation</li>
              <li>Maximize natural light in living spaces</li>
              <li>Reduce waste through the 5 R's approach</li>
              <li>Spend time in nature regularly</li>
              <li>Choose sustainable transportation options</li>
              <li>Grow some of your own food</li>
              <li>Support environmental advocacy efforts</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-300">
          <Link href="/blog/lifestyle/wellness/spiritual-wellness" className="text-violet-600 hover:text-violet-800">
            ← Previous: Spiritual Wellness: Connecting with Purpose and Meaning
          </Link>
          <Link href="/blog/lifestyle/wellness/financial-wellness" className="text-violet-600 hover:text-violet-800">
            Next: Financial Wellness: Achieving Security and Freedom →
          </Link>
        </div>
      </main>
    </div>
  );
}