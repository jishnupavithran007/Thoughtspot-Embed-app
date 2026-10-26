import { getEmbedEnv } from "./embedEnv";
import { HomePage, ListPage, Page, PrimaryNavbarVersion } from "@thoughtspot/visual-embed-sdk";

const customCSSVariables = {
    variables: {
    }
};

const embedConfig = {
    globalConfig: {
        frameParams: {
            height: "var(--ts-content-height)",
            width: "100vw",
        },
        customizations: {
            style: {
                customCSS: {
                    rules_UNSTABLE: {
                        ".embed-module__footerWrapper": {
                            display: "none !important",
                        },
                    },
                    ...customCSSVariables,
                },
            },
        },
        fullHeight: true,
        get overrideHistoryState() {
            return getEmbedEnv().overrideHistoryState;
        },
        enableLinkOverridesV2: true,
        onALL: (err: unknown) => {
            console.log(err);
        },
        additionalFlags:{
            excludeConfigFromURL: true,
        },
        liveboardOverride: {
            dataSourceOverride: [{
                // dataSourceIdentifier: '540c4503-5bc7-4727-897b-f7f4d78dd2ff',
                    filterQuery: [{
                        // ambiguousQuery: ["Tab 2", "Group 2"],
                        filterQueryToken: 'Color = blue',

                    }],
                    parameterQuery:[{
                        parameterQueryToken: "Integer Range Param = 2"
                    }]
            }],
        },
    },

    liveboardConfig: {
        get liveboardId() { return getEmbedEnv().liveboardId; },
        isLiveboardCompactHeaderEnabled: true,
        isLiveboardMasterpiecesEnabled: true,
        isCentralizedLiveboardFilterUXEnabled: true,
        isEnhancedFilterInteractivityEnabled: true,
        isThisPeriodInDateFiltersEnabled: true,
        updatedSpotterChatPrompt: true,
        hideIrrelevantChipsInLiveboardTabs: true,
        coverAndFilterOptionInPDF: true,
    },

    vizConfig: {
        get liveboardId() { return getEmbedEnv().liveboardId; },
        get vizId() { return getEmbedEnv().vizId; },
        isThisPeriodInDateFiltersEnabled: true,
    },

    spotterConfig: {
        get worksheetId() { return getEmbedEnv().worksheetId; },
        updatedSpotterChatPrompt: true,
        spotterSidebarConfig: {
            enablePastConversationsSidebar: true,
        },
    },

    fullAppConfig: {
        showPrimaryNavbar: true,
        modularHomeExperience: true,
        discoveryExperience: {
            primaryNavbarVersion: PrimaryNavbarVersion.Sliding,
            homePage: HomePage.Focused,
            listPageVersion: ListPage.ListWithUXChanges,
        },
        isUnifiedSearchExperienceEnabled: true,
        isLiveboardCompactHeaderEnabled: true,
        isLiveboardMasterpiecesEnabled: true,
        isCentralizedLiveboardFilterUXEnabled: true,
        isEnhancedFilterInteractivityEnabled: true,
        isThisPeriodInDateFiltersEnabled: true,
        updatedSpotterChatPrompt: true,
        spotterSidebarConfig: {
            enablePastConversationsSidebar: true,
        },
        hideIrrelevantChipsInLiveboardTabs: true,
        coverAndFilterOptionInPDF: true,
        pageId: Page.Home,
        liveboardOverrides: {
            "9bd202f5-d431-44bf-9a07-b4f7be372125":{
                dataSourceOverride: [{
                    // dataSourceIdentifier: '540c4503-5bc7-4727-897b-f7f4d78dd2ff',
                        filterQuery: [{
                            // ambiguousQuery: ["Tab 2", "Group 2"],
                            filterQueryToken: 'Color = red',

                        }],
                        parameterQuery:[{
                            parameterQueryToken: "Integer Range Param = 2"
                        }]
                }],
            }
        },
    },

    searchConfig: {
        focusSearchBarOnRender: true,
        isThisPeriodInDateFiltersEnabled: true,
    },

};

export default embedConfig;