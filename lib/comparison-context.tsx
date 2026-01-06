// lib/comparison-context.tsx
import { createContext, useContext, useReducer, useCallback } from &apos;react&apos;;
import { tools } from &apos;../data/tools&apos;;

export type ComparisonDimension = 
  | &apos;specs_matrix&apos; 
  | &apos;performance_radar&apos; 
  | &apos;cost_timeline&apos; 
  | &apos;stack_synergy&apos; 
  | &apos;sentiment_sphere&apos; 
  | &apos;ai_analyst&apos;;

export interface ComparisonSession {
  id: string;
  tools: string[];
  dimension: ComparisonDimension;
  userPreferences: {
    weighting: {
      price: number;
      ease_of_use: number;
      power: number;
    };
    teamSize: number;
    timeframe: number; // years
  };
  insights: Insight[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Insight {
  id: string;
  type: &apos;differentiator&apos; | &apos;trend&apos; | &apos;cost&apos; | &apos;sentiment&apos;;
  title: string;
  description: string;
  severity: &apos;low&apos; | &apos;medium&apos; | &apos;high&apos;;
  tools: string[];
}

interface ComparisonState {
  session: ComparisonSession;
  availableTools: typeof tools;
  isLoading: boolean;
  error: string | null;
}

type ComparisonAction = 
  | { type: &apos;ADD_TOOL&apos;; toolName: string }
  | { type: &apos;REMOVE_TOOL&apos;; toolName: string }
  | { type: &apos;SET_DIMENSION&apos;; dimension: ComparisonDimension }
  | { type: &apos;UPDATE_PREFERENCES&apos;; preferences: Partial<ComparisonSession['userPreferences']> }
  | { type: 'ADD_INSIGHT'; insight: Insight }
  | { type: 'SET_LOADING'; loading: boolean }
  | { type: 'SET_ERROR'; error: string | null };

const initialState: ComparisonState = {
  session: {
    id: generateSessionId(),
    tools: [],
    dimension: 'specs_matrix',
    userPreferences: {
      weighting: { price: 0.4, ease_of_use: 0.3, power: 0.3 },
      teamSize: 10,
      timeframe: 3
    },
    insights: [],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  availableTools: tools,
  isLoading: false,
  error: null
};

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function comparisonReducer(state: ComparisonState, action: ComparisonAction): ComparisonState {
  switch (action.type) {
    case 'ADD_TOOL':
      if (state.session.tools.length >= 6) return state;
      if (state.session.tools.includes(action.toolName)) return state;
      
      return {
        ...state,
        session: {
          ...state.session,
          tools: [...state.session.tools, action.toolName],
          updatedAt: new Date()
        }
      };

    case 'REMOVE_TOOL':
      return {
        ...state,
        session: {
          ...state.session,
          tools: state.session.tools.filter(tool => tool !== action.toolName),
          updatedAt: new Date()
        }
      };

    case &apos;SET_DIMENSION&apos;:
      return {
        ...state,
        session: {
          ...state.session,
          dimension: action.dimension,
          updatedAt: new Date()
        }
      };

    case &apos;UPDATE_PREFERENCES&apos;:
      return {
        ...state,
        session: {
          ...state.session,
          userPreferences: {
            ...state.session.userPreferences,
            ...action.preferences
          },
          updatedAt: new Date()
        }
      };

    case &apos;ADD_INSIGHT&apos;:
      return {
        ...state,
        session: {
          ...state.session,
          insights: [...state.session.insights, action.insight],
          updatedAt: new Date()
        }
      };

    case &apos;SET_LOADING&apos;:
      return { ...state, isLoading: action.loading };

    case &apos;SET_ERROR&apos;:
      return { ...state, error: action.error };

    default:
      return state;
  }
}

const ComparisonContext = createContext<{
  state: ComparisonState;
  dispatch: React.Dispatch<ComparisonAction>;
  actions: {
    addTool: (toolName: string) => void;
    removeTool: (toolName: string) => void;
    setDimension: (dimension: ComparisonDimension) => void;
    updatePreferences: (preferences: Partial<ComparisonSession['userPreferences']>) => void;
    generateInsights: () => void;
  };
} | null>(null);

export function ComparisonProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(comparisonReducer, initialState);

  const actions = {
    addTool: useCallback((toolName: string) => {
      dispatch({ type: 'ADD_TOOL', toolName });
    }, []),

    removeTool: useCallback((toolName: string) => {
      dispatch({ type: 'REMOVE_TOOL', toolName });
    }, []),

    setDimension: useCallback((dimension: ComparisonDimension) => {
      dispatch({ type: &apos;SET_DIMENSION&apos;, dimension });
    }, []),

    updatePreferences: useCallback((preferences: Partial<ComparisonSession['userPreferences']>) => {
      dispatch({ type: 'UPDATE_PREFERENCES', preferences });
    }, []),

    generateInsights: useCallback(() => {
      // This will be implemented with AI services
      const mockInsight: Insight = {
        id: `insight_${Date.now()}`,
        type: &apos;differentiator&apos;,
        title: &apos;Price Advantage&apos;,
        description: &apos;Tool A is 40% cheaper but lacks API access&apos;,
        severity: &apos;medium&apos;,
        tools: state.session.tools.slice(0, 2)
      };
      dispatch({ type: &apos;ADD_INSIGHT&apos;, insight: mockInsight });
    }, [state.session.tools])
  };

  return (
    <ComparisonContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error(&apos;useComparison must be used within ComparisonProvider&apos;);
  }
  return context;
}
