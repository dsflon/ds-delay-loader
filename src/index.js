import DsDelayLoader from './ds-delay-loader';

new DsDelayLoader(
    ".delayloader img",
    {
        transitionSpeed: 1000,
        delaySpeed: 200,
        threshold: 100,
        bg: "#666"
    }
);
