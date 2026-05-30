import { describe, expect, it } from "vitest";
import { geminiProviderPresets } from "@/config/geminiProviderPresets";

describe("TheRouter provider presets", () => {
  it("uses the Gemini-native root endpoint for Gemini", () => {
    const preset = geminiProviderPresets.find(
      (item) => item.name === "TheRouter",
    );

    expect(preset).toBeDefined();
    expect(preset?.websiteUrl).toBe("https://therouter.ai");
    expect(preset?.apiKeyUrl).toBe("https://dashboard.therouter.ai");
    expect(preset?.category).toBe("aggregator");
    expect(preset?.endpointCandidates).toEqual(["https://api.therouter.ai"]);
    expect(preset?.baseURL).toBe("https://api.therouter.ai");
    expect(preset?.model).toBe("gemini-3.5-flash");

    const env = (preset?.settingsConfig as { env: Record<string, string> }).env;
    expect(env.GOOGLE_GEMINI_BASE_URL).toBe("https://api.therouter.ai");
    expect(env.GEMINI_MODEL).toBe("gemini-3.5-flash");
  });
});
