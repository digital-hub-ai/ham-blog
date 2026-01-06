import { useState } from &quot;react&quot;;
import Head from &quot;next/head&quot;;
import { ComparisonProvider } from &quot;../lib/comparison-context&quot;;
import QuantumComparator from &quot;../components/quantum-comparator&quot;;

export default function ComparePage() {
  return (
    <>
      <Head>
        <title>Quantum Comparator - AI Vault</title>
        <meta name="description&quot; content="AI-powered tool comparison with decision intelligence&quot; />
      </Head>
      
      <ComparisonProvider>
        <QuantumComparator />
      </ComparisonProvider>
    </>
  );
} 