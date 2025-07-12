---
title: 'Building SpecCraft: An AI-Powered CLI for Requirements Analysis'
authors: nawam
date: 2025-07-12
description: 'A deep dive into creating an AI-powered CLI tool that transforms scattered requirements into comprehensive specifications using Azure AI Services and LLMs.'
tags:
  [
    'ai',
    'cli',
    'csharp',
    'dotnet',
    'azure',
    'openai',
    'requirements-engineering',
    'software-architecture',
    'clean-architecture',
    'spectre-console',
  ]
---

# Building SpecCraft: An AI-Powered CLI for Requirements Analysis

_How I built a complete C# CLI tool that bridges the gap between human requirements and AI-ready specifications_

Every developer knows the pain: scattered requirements across emails, documents, conversations, and sticky notes. What starts as clear vision becomes fragmented intent, lost in the translation from "what we want" to "what we build."

What if we could create a tool that not only gathers these scattered requirements but uses AI to understand, analyze, and transform them into comprehensive, executable specifications?

Enter **SpecCraft** - an AI-powered CLI tool built with .NET 9 that does exactly that.

<!-- truncate -->

## The Vision: Specifications as Source Code

The inspiration came from Sean Grove's "The New Code" principles - treating specifications as the primary artifact in software development. But I wanted to take it further:

- **AI-Enhanced Understanding**: Use Azure AI Services to analyze content intelligently
- **Multi-Source Gathering**: Pull requirements from web pages, documents, APIs, and interactive sessions
- **LLM-Powered Generation**: Create comprehensive specifications with quality scoring
- **Intent Preservation**: Capture not just what to build, but why and how

## Architecture: Building for the Future

### Clean Architecture from Day One

I built SpecCraft using Clean Architecture principles, separating concerns across five core projects:

```
SpecCraft/
├── SpecCraft.Core/           # Domain models, interfaces, AI abstractions
├── SpecCraft.CLI/            # Rich console application
├── SpecCraft.Processors/     # AI processing implementations
├── SpecCraft.Generators/     # Document generation pipeline
└── SpecCraft.Validation/     # Quality assessment engine
```

### AI Integration Layer

The most fascinating challenge was designing abstractions for AI capabilities:

```csharp
// Azure AI Services for content analysis
public interface IAzureAIAnalyzer
{
    Task<ContentAnalysisResult> AnalyzeContentAsync(string content, ...);
    Task<DocumentAnalysisResult> AnalyzeDocumentAsync(byte[] document, ...);
    Task<ContentClassificationResult> ClassifyContentAsync(string content, ...);
}

// LLM for intelligent requirement processing
public interface ILLMProcessor
{
    Task<RequirementExtractionResult> ExtractRequirementsAsync(...);
    Task<SpecificationGenerationResult> GenerateSpecificationAsync(...);
    Task<RequirementValidationResult> ValidateRequirementsAsync(...);
}

// Orchestration for the complete AI pipeline
public interface IAIOrchestrator
{
    Task<AIProcessingResult> ProcessContentAsync(...);
    Task<CompleteSpecificationResult> GenerateCompleteSpecificationAsync(...);
}
```

Each interface represents a promise - that AI can enhance every step of the requirements process.

## The CLI Experience: Making AI Tangible

Using Spectre.Console, I created a CLI that makes AI processing visible and engaging:

```bash
# Gather requirements with AI analysis
dotnet run -- gather sources --source "https://docs.example.com" --output "./requirements.json"

# Generate specifications with LLM intelligence
dotnet run -- generate spec --project "My API" --format "markdown,json"
```

The magic happens when you see it in action:

```
Processing sources with AI ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100%
AI analyzing content from https://example.com ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100%

✓ Found 1 requirements from https://example.com

┌──────────┬──────────┬────────────────────────────────────────────────────┐
│ Type     │ Priority │ Description                                        │
├──────────┼──────────┼────────────────────────────────────────────────────┤
│ Security │ High     │ The system shall provide secure user authentica... │
└──────────┴──────────┴────────────────────────────────────────────────────┘
```

## Mock Implementations: The Bridge to Production

Rather than simple stubs, I created fully functional mock services that demonstrate the complete AI workflow:

```csharp
public async Task<ContentAnalysisResult> AnalyzeContentAsync(string content, ...)
{
    // Realistic processing simulation
    var keyPhrases = ExtractMockKeyPhrases(content);
    var entities = ExtractMockEntities(content);
    var sentiment = DetermineMockSentiment(content);

    return ContentAnalysisResult.CreateSuccess(
        detectedLanguage: "en",
        sentiment: sentiment,
        keyPhrases: keyPhrases,
        entities: entities,
        warnings: new[] { "This is a mock implementation for development purposes" }
    );
}
```

These aren't just placeholders - they're working prototypes that show exactly how Azure AI Services would behave. You can use SpecCraft today and get real value, then seamlessly upgrade to production AI services.

## The AI Processing Pipeline

The `MockAIOrchestrator` coordinates multiple AI services in a graceful dance:

1. **Azure AI analyzes content** for key phrases and entities
2. **Classification services** categorize requirements by type and priority
3. **LLM services** extract structured requirements with rich context
4. **Enhancement services** add acceptance criteria and implementation details
5. **Validation services** ensure quality and completeness

Each step builds on the previous, transforming raw content into structured, actionable requirements.

## Technical Highlights

### Type System as Documentation

Using C# 9's record types felt like writing poetry:

```csharp
public record RequirementItem(
    string Id,
    string Title,
    string Description,
    RequirementType Type,
    Priority Priority,
    List<string> Tags,
    string SourceId,
    List<string>? Dependencies = null);
```

The type system itself becomes documentation - every nullable annotation, every immutable record tells a story about intent.

### Result Pattern for Error Handling

Consistent result types create beautiful symmetry across the system:

```csharp
public abstract record OperationResult
{
    public bool Success { get; init; }
    public string? ErrorMessage { get; init; }
    public IReadOnlyCollection<string> Warnings { get; init; } = Array.Empty<string>();
    public TimeSpan Duration { get; init; }
}
```

Error handling becomes declarative rather than exceptional.

## Real-World Testing

The CLI actually works! Here's what happens when you run it:

```bash
$ dotnet run -- gather sources --source "https://example.com"

[18:30:18 INF] MOCK: Starting AI-powered content processing
[18:30:18 INF] MOCK: Analyzing content with Azure AI Services (39 characters)
[18:30:18 INF] MOCK: Extracting requirements using LLM processing

✓ Found 1 requirements from https://example.com
Quality Score: 8.8/10
AI Recommendations:
  • Consider adding more detailed acceptance criteria
  • Include non-functional requirements for scalability
  • Add user journey diagrams
```

## The Development Experience

### Setup Script for Reproducibility

I created a complete setup script that recreates the entire project:

```bash
#!/bin/bash
# SpecCraft CLI Setup Script
echo "🚀 Setting up SpecCraft CLI - AI-Powered Requirements Analysis Tool"

# Create solution and projects
dotnet new sln -n SpecCraft
dotnet new classlib -n SpecCraft.Core -o src/SpecCraft.Core
# ... complete project setup

# Install AI integration packages
dotnet add src/SpecCraft.Core package Azure.AI.OpenAI
dotnet add src/SpecCraft.Core package Azure.AI.TextAnalytics

echo "🎉 SpecCraft CLI setup completed successfully!"
```

### VS Code Integration

Created tasks for seamless development:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "build",
      "command": "dotnet",
      "args": ["build", "${workspaceFolder}/SpecCraft.sln"],
      "group": "build"
    },
    {
      "label": "run",
      "command": "dotnet",
      "args": [
        "run",
        "--project",
        "${workspaceFolder}/src/SpecCraft.CLI",
        "--"
      ],
      "group": { "kind": "build", "isDefault": true }
    }
  ]
}
```

## Production Readiness

The architecture is designed for easy transition to real Azure AI Services:

### Configuration Support

```json
{
  "AzureAIConfiguration": {
    "OpenAIEndpoint": "https://your-openai.openai.azure.com/",
    "OpenAIApiKey": "your-api-key",
    "OpenAIModelName": "gpt-4o",
    "TextAnalyticsEndpoint": "https://your-textanalytics.cognitiveservices.azure.com/",
    "TextAnalyticsApiKey": "your-api-key",
    "UseMockImplementations": false
  }
}
```

### Interface-Based Design

Mock implementations can be swapped with real Azure services without changing a single line of business logic.

## Lessons Learned

### 1. AI Abstraction is Crucial

Creating proper abstractions for AI capabilities allows you to develop and test without expensive API calls, then seamlessly upgrade to production services.

### 2. Rich CLI Experiences Matter

Using Spectre.Console transformed what could have been a dry command-line utility into something that feels alive and responsive.

### 3. Mock with Purpose

Don't just stub - create working demonstrations that show the full potential of your system.

### 4. Architecture for Evolution

As AI capabilities advance, SpecCraft can grow more intelligent without breaking changes to the core architecture.

## The Meta-Experience

There's something profound about using AI to build tools that enhance AI-human collaboration. Throughout development, I found myself thinking about how to represent my own understanding of requirements in the very system we were building. It's requirements analysis all the way down!

## Future Possibilities

The architecture we've built could support:

- **Visual specification editors**
- **Real-time collaboration features**
- **Integration with issue tracking systems**
- **Automated testing generation from specifications**
- **Continuous specification validation in CI/CD pipelines**

## Try It Yourself

SpecCraft is open source and ready to explore:

```bash
# Clone the repository
git clone https://github.com/nawa094/SpecCraft.git
cd SpecCraft

# Build and test
dotnet build
dotnet run --project src/SpecCraft.CLI -- --help

# Try AI-powered gathering
dotnet run --project src/SpecCraft.CLI -- gather sources --source "https://example.com"

# Test specification generation
dotnet run --project src/SpecCraft.CLI -- generate spec --project "Demo API"
```

## Conclusion

Building SpecCraft has been an exploration of what's possible when AI enhances rather than replaces human creativity. It represents a vision where:

- **Requirements never get lost in translation**
- **Specifications become living, executable documents**
- **AI amplifies human insight rather than replacing it**
- **The gap between "what we want" and "what we build" continues to shrink**

The future of software development isn't AI replacing humans - it's AI and humans working together to create better solutions. SpecCraft is just the beginning.

---

**Repository:** [https://github.com/nawa094/SpecCraft](https://github.com/nawa094/SpecCraft)

**Technologies:** .NET 9, C# 12, Spectre.Console, Azure AI Services, OpenAI, Clean Architecture

**Status:** Production-ready mock implementations, interfaces ready for Azure AI Services integration

_What requirements will you transform into specifications today?_ 🚀🤖✨
