export type CategoryType =
  | "layout"
  | "components"
  | "navigation"
  | "animation"
  | "design-style"
  | "design-tokens"
  | "ux-patterns"
  | "framework-concepts"
  | "platform-specific";

export type Platform = "web" | "ios" | "android" | "cross-platform";

export interface UITerm {
  id: string;
  name: string;
  category: CategoryType;
  tagline: string;
  definition: string;
  whenToUse: string[];
  whenNotToUse: string[];
  officialStandard?: {
    source: string;
    url: string;
    excerpt: string;
  };
  relatedTerms: string[];
  realWorldUsage: string[];
  platforms: Platform[];
  frameworks?: string[];
  codeSnippet: {
    language: "tsx" | "html" | "css" | "swift" | "kotlin";
    code: string;
  };
  liveDemo: string;
  tags: string[];
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  mode?: 'STANDARDS' | 'SUGGESTION';
  timestamp: Date;
}
