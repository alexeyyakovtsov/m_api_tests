module.exports = {
    "collectCoverageFrom": [
        "src/**/*.{js,ts}",
        "!src/**/*.d.ts"
    ],
    "roots": [
        "<rootDir>/src",
    ],
    "testMatch": [
        "<rootDir>/src/**/*.{spec,test}.{js,ts}",
    ],
    "transform": {
        "^.+\\.(js|ts)$": "ts-jest"
    },
    "transformIgnorePatterns": [
        "[/\\\\]node_modules[/\\\\].+\\.(js|ts)$"
    ],
    "moduleFileExtensions": [
        "ts",
        "js",
        "json",
        "node",
    ]
};
