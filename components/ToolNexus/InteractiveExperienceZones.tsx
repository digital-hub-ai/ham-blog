// components/ToolNexus/InteractiveExperienceZones.tsx
import { useState, useEffect, useRef } from &apos;react&apos;;
import { 
  InteractiveZones, 
  ToolNexus, 
  UserPersona,
  APIPlaygroundType,
  ImplementationSimulatorType,
  ComparisonPortalType,
  TemplateGalleryType,
  RoadmapExplorerType,
  ImplementationSimulatorStepType,
  ImplementationSimulatorOptionType,
  TemplateType,
  FeatureType
} from &apos;../../types/tool-nexus&apos;;

interface InteractiveExperienceZonesProps {
  tool: ToolNexus;
  userPersona: UserPersona;
}

const InteractiveExperienceZones: React.FC<InteractiveExperienceZonesProps> = ({
  tool,
  userPersona
}) => {
  const [activeZone, setActiveZone] = useState<string>(&apos;api_playground&apos;);
  const [zoneStates, setZoneStates] = useState<Record<string, any>>({});

  // Mock data for zones
  const mockZones = {
    api_playground: {
      endpoints: [
        { method: 'GET', path: '/api/tools', description: 'Get all tools', parameters: [], responses: [{ status_code: 200, description: 'Success', example: { tools: [] } }] },
        { method: 'POST', path: '/api/tools', description: 'Create tool', parameters: [], responses: [{ status_code: 201, description: 'Created', example: { id: '123' } }] }
      ],
      authentication: [{ type: 'api_key' as const, description: 'API Key authentication', setup_complexity: 'simple' as const }],
      rate_limits: [{ endpoint: '*', requests_per_minute: 100, requests_per_hour: 6000, requests_per_day: 100000 }],
      sandbox_available: true
    } as APIPlaygroundType,
    implementation_simulator: {
      setup_steps: [
        { id: '1', title: 'Account Setup', description: 'Create your account', type: 'info' as const, required: true, estimated_time: 5, configuration_options: [] },
        { id: '2', title: 'API Configuration', description: 'Configure API keys', type: 'input' as const, required: true, estimated_time: 10, configuration_options: [] }
      ],
      workflow_integrations: [],
      onboarding_steps: [],
      customization_options: [],
      migration_complexity: { 
        complexity_score: 3, 
        estimated_time: 2, 
        required_resources: [], 
        potential_roadblocks: [],
        cost_estimate: 500
      }
    } as ImplementationSimulatorType,
    comparison_portal: {
      competitors: [
        { name: 'Competitor A', market_share: 0.2, strengths: ['Feature A'], weaknesses: ['Feature B'], pricing_tier: 'Pro' },
        { name: 'Competitor B', market_share: 0.15, strengths: ['Feature C'], weaknesses: ['Feature D'], pricing_tier: 'Free' }
      ],
      comparison_categories: [],
      feature_matrix: { features: [] },
      pricing_comparison: { tiers: [] }
    } as ComparisonPortalType,
    template_gallery: {
      templates: [
        { id: '1', name: 'Template 1', description: 'Description', category: 'Category', author: 'Author', download_count: 100, rating: 4.5, preview_url: '', download_url: '', tags: [], difficulty: 'beginner' as const }
      ],
      categories: ['Category 1', 'Category 2'],
      featured_templates: [],
      community_contributions: []
    } as TemplateGalleryType,
    roadmap_explorer: {
      quarters: ['Q1 2024', 'Q2 2024'],
      features: [
        { id: '1', title: 'New Feature', description: 'Description', quarter: 'Q1 2024', status: 'planned' as const, priority: 5, votes: 10, category: 'Core' }
      ],
      voting_enabled: true,
      release_timeline: { current_quarter: 'Q1 2024', next_release: '2024-02-01', upcoming_features: [] }
    } as RoadmapExplorerType
  };

  // Zone priority based on user persona
  const getZonePriority = (zoneId: string): number => {
    const priorities: Record<string, Record<string, number>> = {
      developer: {
        api_playground: 10,
        implementation_simulator: 9,
        comparison_portal: 7,
        template_gallery: 6,
        roadmap_explorer: 4
      },
      designer: {
        template_gallery: 10,
        implementation_simulator: 8,
        comparison_portal: 7,
        api_playground: 3,
        roadmap_explorer: 5
      },
      executive: {
        comparison_portal: 10,
        implementation_simulator: 9,
        roadmap_explorer: 8,
        api_playground: 2,
        template_gallery: 4
      },
      team_lead: {
        implementation_simulator: 10,
        comparison_portal: 9,
        api_playground: 7,
        template_gallery: 6,
        roadmap_explorer: 5
      },
      freelancer: {
        comparison_portal: 10,
        template_gallery: 9,
        implementation_simulator: 7,
        api_playground: 5,
        roadmap_explorer: 4
      },
      student: {
        template_gallery: 10,
        api_playground: 8,
        implementation_simulator: 6,
        comparison_portal: 5,
        roadmap_explorer: 4
      }
    };

    return priorities[userPersona.primary_persona]?.[zoneId] || 5;
  };

  const availableZones = [
    {
      id: 'api_playground',
      title: 'API Playground',
      description: 'Interactive API testing with live code execution',
      icon: '🔧',
      priority: getZonePriority('api_playground'),
      available: mockZones.api_playground,
      estimatedTime: '25 min'
    },
    {
      id: 'implementation_simulator',
      title: 'Implementation Simulator',
      description: 'Preview setup process and test configurations',
      icon: '⚙️',
      priority: getZonePriority('implementation_simulator'),
      available: mockZones.implementation_simulator,
      estimatedTime: '20 min'
    },
    {
      id: 'comparison_portal',
      title: 'Comparison Portal',
      description: 'Side-by-side analysis with alternative tools',
      icon: '⚖️',
      priority: getZonePriority('comparison_portal'),
      available: mockZones.comparison_portal,
      estimatedTime: '15 min'
    },
    {
      id: 'template_gallery',
      title: 'Template Gallery',
      description: 'Browse and instantly copy templates with AI suggestions',
      icon: '📋',
      priority: getZonePriority('template_gallery'),
      available: mockZones.template_gallery,
      estimatedTime: '12 min'
    },
    {
      id: 'roadmap_explorer',
      title: 'Roadmap Explorer',
      description: 'Interactive product roadmap with voting and feedback',
      icon: '🗺️',
      priority: getZonePriority('roadmap_explorer'),
      available: mockZones.roadmap_explorer,
      estimatedTime: '8 min'
    }
  ].filter(zone => zone.available);

  // Sort zones by priority
  const sortedZones = [...availableZones].sort((a, b) => b.priority - a.priority);

  const ZoneSelector: React.FC = () => (
    <div className="mb-8&quot;>
      <h3 className="text-2xl font-semibold text-white mb-6&quot;>Interactive Experience Zones</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
        {sortedZones.map((zone) => {
          const isActive = activeZone === zone.id;
          const progress = zoneStates[zone.id]?.progress || 0;
          
          return (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone.id)}
              className={`p-6 rounded-lg border transition-all duration-200 text-left ${
                isActive 
                  ? &apos;bg-white/20 border-white/40 text-white transform scale-105&apos; 
                  : &apos;bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:transform hover:scale-102
              }`}
            >
              <div className="flex items-start justify-between mb-4&quot;>
                <div className="text-3xl&quot;>{zone.icon}</div>
                <div className="flex flex-col items-end gap-1&quot;>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    zone.priority >= 8 
                      ? &apos;bg-green-500/20 text-green-300 border border-green-500/30&apos;
                      : zone.priority >= 5
                      ? &apos;bg-blue-500/20 text-blue-300 border border-blue-500/30&apos;
                      : &apos;bg-yellow-500/20 text-yellow-300 border border-yellow-500/30
                  }`}>
                    Priority {zone.priority}/10
                  </span>
                  <span className="text-xs text-white/50&quot;>{zone.estimatedTime}</span>
                </div>
              </div>
              
              <h4 className="font-semibold text-lg mb-2&quot;>{zone.title}</h4>
              <p className="text-sm text-white/60 mb-4&quot;>{zone.description}</p>
              
              {progress > 0 && (
                <div className="mt-auto&quot;>
                  <div className="flex items-center justify-between mb-1&quot;>
                    <span className="text-xs text-white/50&quot;>Progress</span>
                    <span className="text-xs text-white&quot;>{progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2&quot;>
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300&quot;
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  const APIPlayground: React.FC<{ playground: APIPlaygroundType }> = ({ playground }) => {
    const [activeEndpoint, setActiveEndpoint] = useState(playground.endpoints[0]);
    const [requestBody, setRequestBody] = useState<string>(&apos;&apos;);
    const [response, setResponse] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleTemplateSelect = (template: APIPlaygroundType) => {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setResponse({
          status: 200,
          data: { message: &quot;Success&quot;, timestamp: new Date().toISOString() },
          headers: { &quot;content-type&quot;: &quot;application/json&quot; }
        });
        setIsLoading(false);
        
        // Update progress
        setZoneStates(prev => ({
          ...prev,
          api_playground: { ...prev.api_playground, progress: 50 }
        }));
      }, 1500);
    };

    return (
      <div className="max-w-4xl mx-auto&quot;>
        <h4 className="text-xl font-semibold text-white mb-6&quot;>API Playground</h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6&quot;>
          {/* Endpoint Selector */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
            <h5 className="font-medium text-white mb-4&quot;>Available Endpoints</h5>
            <div className="space-y-2&quot;>
              {playground.endpoints.map((endpoint, index) => (
                <button
                  key={index}
                  onClick={() => setActiveEndpoint(endpoint)}
                  className={`w-full p-3 rounded-lg border text-left transition-all ${
                    activeEndpoint === endpoint
                      ? &apos;bg-white/20 border-white/40 text-white&apos;
                      : &apos;bg-white/5 border-white/10 text-white/70 hover:bg-white/10
                  }`}
                >
                  <div className="flex items-center justify-between&quot;>
                    <div>
                      <div className="font-medium&quot;>{endpoint.method} {endpoint.path}</div>
                      <div className="text-sm text-white/60&quot;>{endpoint.description}</div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      endpoint.method === &apos;GET&apos; ? &apos;bg-green-500/20 text-green-300&apos; :
                      endpoint.method === &apos;POST&apos; ? &apos;bg-blue-500/20 text-blue-300&apos; :
                      &apos;bg-yellow-500/20 text-yellow-300
                    }`}>
                      {endpoint.method}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Request Builder */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
            <h5 className="font-medium text-white mb-4&quot;>Request Builder</h5>
            
            <div className="space-y-4&quot;>
              <div>
                <label className="block text-sm text-white/70 mb-2&quot;>Request Body (JSON)</label>
                <textarea
                  value={requestBody}
                  onChange={(e) => setRequestBody(e.target.value)}
                  className="w-full h-32 p-3 bg-black/30 border border-white/10 rounded-lg text-white font-mono text-sm&quot;
                  placeholder=&apos;{&quot;key&quot;: &quot;value&quot;}
                />
              </div>
              
              <button
                onClick={() => handleTemplateSelect(playground)}
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed&quot;
              >
                {isLoading ? &apos;Executing...&apos; : &apos;Execute Request&apos;}
              </button>
            </div>
          </div>
        </div>

        {/* Response Display */}
        {response && (
          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
            <h5 className="font-medium text-white mb-4&quot;>Response</h5>
            <div className="space-y-3&quot;>
              <div className="flex items-center gap-4&quot;>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  response.status >= 200 && response.status < 300 
                    ? &apos;bg-green-500/20 text-green-300&apos; 
                    : &apos;bg-red-500/20 text-red-300
                }`}>
                  Status: {response.status}
                </span>
                <span className="text-white/60 text-sm&quot;>
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
              <pre className="p-4 bg-black/30 rounded-lg text-green-400 font-mono text-sm overflow-x-auto&quot;>
                {JSON.stringify(response.data, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    );
  };

  const ImplementationSimulator: React.FC<{ simulator: ImplementationSimulatorType }> = ({ simulator }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

    const handleSetupStep = (step: ImplementationSimulatorStepType, index: number) => {
      if (currentStep < simulator.setup_steps.length - 1) {
        setCurrentStep(currentStep + 1);
        // Update progress
        const progress = ((currentStep + 1) / simulator.setup_steps.length) * 100;
        setZoneStates(prev => ({
          ...prev,
          implementation_simulator: { ...prev.implementation_simulator, progress }
        }));
      }
    };

    const handleOptionSelect = (option: ImplementationSimulatorOptionType, index: number) => {
      setSelectedOptions(prev => ({
        ...prev,
        [option.name]: option.default_value || &apos;
      }));
    };

    const prevStep = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };

    const nextStep = () => {
      if (currentStep < simulator.setup_steps.length - 1) {
        setCurrentStep(currentStep + 1);
        // Update progress
        const progress = ((currentStep + 1) / simulator.setup_steps.length) * 100;
        setZoneStates(prev => ({
          ...prev,
          implementation_simulator: { ...prev.implementation_simulator, progress }
        }));
      }
    };

    const step = simulator.setup_steps[currentStep];

    return (
      <div className="max-w-4xl mx-auto&quot;>
        <h4 className="text-xl font-semibold text-white mb-6&quot;>Implementation Simulator</h4>
        
        {/* Progress Bar */}
        <div className="mb-6&quot;>
          <div className="flex items-center justify-between mb-4&quot;>
            <span className="text-sm text-white/70&quot;>Step {currentStep + 1} of {simulator.setup_steps.length}</span>
            <span className="text-sm text-purple-400&quot;>{Math.round(((currentStep + 1) / simulator.setup_steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3&quot;>
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300&quot;
              style={{ width: `${((currentStep + 1) / simulator.setup_steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Step */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
          <div className="flex items-center gap-3 mb-4&quot;>
            <div className="w-8 h-8 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center&quot;>
              <span className="text-blue-300 font-medium&quot;>{currentStep + 1}</span>
            </div>
            <h5 className="text-lg font-medium text-white&quot;>{step.title}</h5>
          </div>
          
          <p className="text-white/70 mb-6&quot;>{step.description}</p>
          
          {step.configuration_options && (
            <div className="space-y-4&quot;>
              <h6 className="font-medium text-white&quot;>Configuration Options</h6>
              {step.configuration_options.map((option, index) => (
                <div key={index} className="bg-black/30 rounded-lg p-4&quot;>
                  <div className="flex items-center justify-between mb-2&quot;>
                    <span className="text-white&quot;>{option.name}</span>
                    <span className="text-sm text-white/60 capitalize&quot;>{option.type}</span>
                  </div>
                  <p className="text-sm text-white/50 mb-3&quot;>{option.description}</p>
                  
                  {option.type === &apos;select&apos; && (
                    <select
                      value={selectedOptions[option.name] || option.default_value}
                      onChange={(e) => setSelectedOptions(prev => ({
                        ...prev,
                        [option.name]: e.target.value
                      }))}
                      className="w-full p-2 bg-white/10 border border-white/20 rounded text-white&quot;
                    >
                      {option.options?.map((opt: string, i: number) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  )}
                  
                  {option.type === &apos;boolean&apos; && (
                    <label className="flex items-center gap-2&quot;>
                      <input
                        type="checkbox&quot;
                        checked={selectedOptions[option.name] === 'true'}
                        onChange={(e) => setSelectedOptions(prev => ({
                          ...prev,
                          [option.name]: e.target.checked ? 'true' : 'false'
                        }))}
                        className="rounded&quot;
                      />
                      <span className="text-white&quot;>Enable {option.name}</span>
                    </label>
                  )}
                </div>
              ))}
            </div>
          )}

          {step.estimated_time && (
            <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20&quot;>
              <div className="text-sm text-blue-300&quot;>
                ⏱️ Estimated time: {step.estimated_time}
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6&quot;>
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed&quot;
          >
            Previous Step
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === simulator.setup_steps.length - 1}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed&quot;
          >
            {currentStep === simulator.setup_steps.length - 1 ? &apos;Complete Setup&apos; : &apos;Next Step&apos;}
          </button>
        </div>
      </div>
    );
  };

  const ComparisonPortal: React.FC<{ portal: ComparisonPortalType }> = ({ portal }) => {
    const [selectedCompetitors, setSelectedCompetitors] = useState<string[]>([]);
    const [comparisonView, setComparisonView] = useState<&apos;features&apos; | &apos;pricing&apos; | &apos;performance&apos;>(&apos;features);

    const handleCompetitorSelect = (competitor: string, index: number) => {
      if (selectedCompetitors.includes(competitor)) {
        setSelectedCompetitors(selectedCompetitors.filter(c => c !== competitor));
      } else {
        setSelectedCompetitors([...selectedCompetitors, competitor]);
      }
    };

    return (
      <div className="max-w-6xl mx-auto&quot;>
        <h4 className="text-xl font-semibold text-white mb-6&quot;>Comparison Portal</h4>
        
        {/* Competitor Selection */}
        <div className="mb-6 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
          <h5 className="font-medium text-white mb-4&quot;>Select Competitors to Compare</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3&quot;>
            {portal.competitors.map((competitor, index) => (
              <label key={index} className="flex items-center gap-2 p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10&quot;>
                <input
                  type="checkbox&quot;
                  checked={selectedCompetitors.includes(competitor.name)}
                  onChange={(e) => handleCompetitorSelect(competitor.name, index)}
                  className="rounded&quot;
                />
                <span className="text-white&quot;>{competitor.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* View Selector */}
        <div className="mb-6 flex gap-2&quot;>
          {([&apos;features&apos;, &apos;pricing&apos;, &apos;performance&apos;] as const).map((view) => (
            <button
              key={view}
              onClick={() => setComparisonView(view)}
              className={`px-4 py-2 rounded-lg capitalize transition-all ${
                comparisonView === view
                  ? &apos;bg-white/20 text-white&apos;
                  : &apos;bg-white/5 text-white/60 hover:bg-white/10
              }`}
            >
              {view} Comparison
            </button>
          ))}
        </div>

        {/* Comparison Results */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
          {selectedCompetitors.length === 0 ? (
            <div className="text-center py-8&quot;>
              <div className="text-3xl mb-2&quot;>⚖️</div>
              <div className="text-white/60&quot;>Select competitors to start comparing</div>
            </div>
          ) : (
            <div className="space-y-4&quot;>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20&quot;>
                  <h6 className="font-medium text-purple-300 mb-2&quot;>Current Tool</h6>
                  <div className="text-white&quot;>{tool.tool_id}</div>
                </div>
                {selectedCompetitors.map((competitor, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10&quot;>
                    <h6 className="font-medium text-white mb-2&quot;>{competitor}</h6>
                    <div className="text-white/60&quot;>Competitor {index + 1}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20&quot;>
                <div className="text-blue-300&quot;>
                  Detailed comparison analysis would appear here based on the selected view.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const TemplateGallery: React.FC<{ gallery: TemplateGalleryType }> = ({ gallery }) => {
    const [selectedCategory, setSelectedCategory] = useState(gallery.categories[0]);
    const [searchTerm, setSearchTerm] = useState(&apos;);

    const filteredTemplates = gallery.templates.filter(template => 
      template.category === selectedCategory &&
      template.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCategoryFilter = (category: string, index: number) => {
      setSelectedCategory(category);
    };

    const handleTemplatePreview = (template: TemplateType, index: number) => {
      // Handle template preview
    };

    return (
      <div className="max-w-6xl mx-auto&quot;>
        <h4 className="text-xl font-semibold text-white mb-6&quot;>Template Gallery</h4>
        
        {/* Search and Filter */}
        <div className="mb-6 flex flex-col md:flex-row gap-4&quot;>
          <input
            type="text&quot;
            placeholder="Search templates...&quot;
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50&quot;
          />
          
          <div className="flex gap-2&quot;>
            {gallery.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryFilter(category, index)}
                className={`px-4 py-3 rounded-lg transition-all ${
                  selectedCategory === category
                    ? &apos;bg-white/20 text-white&apos;
                    : &apos;bg-white/5 text-white/60 hover:bg-white/10
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {filteredTemplates.map((template, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all&quot;>
              <div className="flex items-start justify-between mb-4&quot;>
                <h5 className="font-medium text-white&quot;>{template.name}</h5>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full&quot;>
                  {template.difficulty}
                </span>
              </div>
              
              <p className="text-white/60 text-sm mb-4&quot;>{template.description}</p>
              
              <div className="flex items-center justify-between text-sm&quot;>
                <span className="text-white/50&quot;>{template.category}</span>
                <span className="text-white/50&quot;>{template.download_count} downloads</span>
              </div>
              
              <div className="mt-4 flex gap-2&quot;>
                <button
                  onClick={() => handleTemplatePreview(template, index)}
                  className="flex-1 py-2 bg-white/10 border border-white/20 rounded text-white hover:bg-white/20 transition-all&quot;
                >
                  Preview
                </button>
                <button
                  className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded font-medium&quot;
                >
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const RoadmapExplorer: React.FC<{ roadmap: RoadmapExplorerType }> = ({ roadmap }) => {
    const [selectedQuarter, setSelectedQuarter] = useState(roadmap.quarters[0]);
    const [votedFeatures, setVotedFeatures] = useState<Set<string>>(new Set());

    const handleQuarterSelect = (quarter: string, index: number) => {
      setSelectedQuarter(quarter);
    };

    const handleFeatureDetail = (feature: FeatureType, index: number) => {
      const hasVoted = votedFeatures.has(feature.id);
      
      return (
        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
          <div className="flex items-start justify-between mb-4&quot;>
            <div>
              <h5 className="font-medium text-white mb-2&quot;>{feature.title}</h5>
              <p className="text-white/60&quot;>{feature.description}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              feature.status === &apos;planned&apos; ? &apos;bg-blue-500/20 text-blue-300&apos; :
              feature.status === &apos;in_progress&apos; ? &apos;bg-yellow-500/20 text-yellow-300&apos; :
              &apos;bg-green-500/20 text-green-300
            }`}>
              {feature.status.replace(&apos;_&apos;, &apos; &apos;)}
            </span>
          </div>
          
          <div className="flex items-center justify-between&quot;>
            <div className="flex items-center gap-4&quot;>
              <div className="flex items-center gap-2&quot;>
                <span className="text-white/60&quot;>Votes:</span>
                <span className="font-medium text-white&quot;>{feature.votes}</span>
              </div>
              <div className="flex items-center gap-2&quot;>
                <span className="text-white/60&quot;>Priority:</span>
                <div className="flex items-center gap-1&quot;>
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < feature.priority ? &apos;bg-purple-500&apos; : &apos;bg-white/20&apos;
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <button
              onClick={() => {
                if (!hasVoted) {
                  setVotedFeatures(new Set([...votedFeatures, feature.id]));
                  feature.votes++;
                }
              }}
              disabled={hasVoted}
              className={`px-4 py-2 rounded-lg transition-all ${
                hasVoted
                  ? &apos;bg-green-500/20 text-green-300 border border-green-500/30&apos;
                  : &apos;bg-white/10 border border-white/20 text-white hover:bg-white/20
              }`}
            >
              {hasVoted ? &apos;✓ Voted&apos; : &apos;Vote&apos;}
            </button>
          </div>
        </div>
      );
    };

    return (
      <div className="max-w-6xl mx-auto&quot;>
        <h4 className="text-xl font-semibold text-white mb-6&quot;>Roadmap Explorer</h4>
        
        {/* Quarter Selector */}
        <div className="mb-6 flex gap-2&quot;>
          {roadmap.quarters.map((quarter, index) => (
            <button
              key={index}
              onClick={() => handleQuarterSelect(quarter, index)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedQuarter === quarter
                  ? &apos;bg-white/20 text-white&apos;
                  : &apos;bg-white/5 text-white/60 hover:bg-white/10
              }`}
            >
              {quarter}
            </button>
          ))}
        </div>

        {/* Features for Selected Quarter */}
        <div className="space-y-4&quot;>
          {roadmap.features
            .filter(feature => feature.quarter === selectedQuarter)
            .map((feature, index) => handleFeatureDetail(feature, index))}
        </div>
      </div>
    );
  };

  const renderActiveZone = () => {
    switch (activeZone) {
      case &apos;api_playground&apos;:
        return <APIPlayground playground={mockZones.api_playground} />;
      case &apos;implementation_simulator&apos;:
        return <ImplementationSimulator simulator={mockZones.implementation_simulator} />;
      case &apos;comparison_portal&apos;:
        return <ComparisonPortal portal={mockZones.comparison_portal} />;
      case &apos;template_gallery&apos;:
        return <TemplateGallery gallery={mockZones.template_gallery} />;
      case &apos;roadmap_explorer&apos;:
        return <RoadmapExplorer roadmap={mockZones.roadmap_explorer} />;
      default:
        return <div className="text-white/60&quot;>Zone not available</div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto&quot;>
      <ZoneSelector />
      {renderActiveZone()}
    </div>
  );
};

export default InteractiveExperienceZones;
