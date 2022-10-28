"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/AudioProvider.jsx
var AudioProvider = __webpack_require__(5331);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/future/image.js
var future_image = __webpack_require__(1608);
var image_default = /*#__PURE__*/__webpack_require__.n(future_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/player/ForwardButton.jsx

function ForwardIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16 5L19 8M19 8L16 11M19 8H10.5C7.46243 8 5 10.4624 5 13.5C5 15.4826 5.85204 17.2202 7 18.188",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M13 15V19",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16 18V16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H17C16.4477 19 16 18.5523 16 18Z",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
}
function ForwardButton({ player , amount =10  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "group relative rounded-full focus:outline-none",
        onClick: ()=>player.seekBy(amount),
        "aria-label": `Fast-forward ${amount} seconds`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute -inset-4 -left-2 md:hidden"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ForwardIcon, {
                className: "h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/player/MuteButton.jsx

function MuteIcon({ muted , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: muted ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16 10L19 13",
                    fill: "none"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M19 10L16 13",
                    fill: "none"
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M17 7C17 7 19 9 19 12C19 15 17 17 17 17",
                    fill: "none"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5",
                    fill: "none"
                })
            ]
        })
    });
}
function MuteButton({ player  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none",
        onClick: ()=>player.toggleMute(),
        "aria-label": player.muted ? "Unmute" : "Mute",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute -inset-4 md:hidden"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MuteIcon, {
                muted: player.muted,
                className: "h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/player/PlaybackRateButton.jsx


const playbackRates = [
    {
        value: 1,
        icon: function PlaybackIcon(props) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                ...props,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z",
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.75 7.25L5.25 5.77539V11.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M8.75 7.75L11.25 10.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11.25 7.75L8.75 10.25"
                    })
                ]
            });
        }
    },
    {
        value: 1.5,
        icon: function PlaybackIcon(props) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                ...props,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z",
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M2.75 7.25L4.25 5.77539V11.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M7.5 11C7.5 11.2761 7.27614 11.5 7 11.5C6.72386 11.5 6.5 11.2761 6.5 11C6.5 10.7239 6.72386 10.5 7 10.5C7.27614 10.5 7.5 10.7239 7.5 11Z",
                        strokeWidth: "1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.25 5.75H9.75V8.25H10.75C11.5784 8.25 12.25 8.92157 12.25 9.75V9.75C12.25 10.5784 11.5784 11.25 10.75 11.25H9.75"
                    })
                ]
            });
        }
    },
    {
        value: 2,
        icon: function PlaybackIcon(props) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                ...props,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z",
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.75 8.75L12.25 11.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.25 8.75L9.75 11.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.75 7.25C3.75 7.25 3.90144 5.75 5.63462 5.75C6.1633 5.75 6.5448 5.95936 6.81973 6.25035C7.67157 7.15197 6.97033 8.47328 6.0238 9.28942L3.75 11.25H7.25"
                    })
                ]
            });
        }
    }, 
];
function PlaybackRateButton({ player  }) {
    let { 0: playbackRate , 1: setPlaybackRate  } = (0,external_react_.useState)(playbackRates[0]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "relative flex h-6 w-6 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
        onClick: ()=>{
            setPlaybackRate((rate)=>{
                let existingIdx = playbackRates.indexOf(rate);
                let idx = (existingIdx + 1) % playbackRates.length;
                let next = playbackRates[idx];
                player.playbackRate(next.value);
                return next;
            });
        },
        "aria-label": "Playback rate",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute -inset-4 md:hidden"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(playbackRate.icon, {
                className: "h-4 w-4"
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/player/PlayButton.jsx
var PlayButton = __webpack_require__(1535);
;// CONCATENATED MODULE: ./src/components/player/RewindButton.jsx

function RewindIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5 15V19"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523 10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z"
            })
        ]
    });
}
function RewindButton({ player , amount =10  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "group relative rounded-full focus:outline-none",
        onClick: ()=>player.seekBy(-amount),
        "aria-label": `Rewind ${amount} seconds`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute -inset-4 -right-2 md:hidden"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RewindIcon, {
                className: "h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700"
            })
        ]
    });
}

;// CONCATENATED MODULE: external "react-aria"
const external_react_aria_namespaceObject = require("react-aria");
;// CONCATENATED MODULE: external "react-stately"
const external_react_stately_namespaceObject = require("react-stately");
;// CONCATENATED MODULE: ./src/components/player/Slider.jsx





function parseTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    seconds = seconds - hours * 3600 - minutes * 60;
    return [
        hours,
        minutes,
        seconds
    ];
}
function formatTime(seconds, totalSeconds = seconds) {
    let totalWithoutLeadingZeroes = totalSeconds.slice(totalSeconds.findIndex((x)=>x !== 0));
    return seconds.slice(seconds.length - totalWithoutLeadingZeroes.length).map((x)=>x.toString().padStart(2, "0")).join(":");
}
function Thumb(props) {
    let { state , trackRef , focusProps , isFocusVisible , index  } = props;
    let inputRef = (0,external_react_.useRef)(null);
    let { thumbProps , inputProps  } = (0,external_react_aria_namespaceObject.useSliderThumb)({
        index,
        trackRef,
        inputRef
    }, state);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute -top-1/2 -translate-x-1/2",
        style: {
            left: `${state.getThumbPercent(index) * 100}%`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            ...thumbProps,
            onMouseDown: (...args)=>{
                thumbProps.onMouseDown(...args);
                props.onChangeStart?.();
            },
            onPointerDown: (...args)=>{
                thumbProps.onPointerDown(...args);
                props.onChangeStart?.();
            },
            className: external_clsx_default()("h-4 rounded-full", isFocusVisible || state.isThumbDragging(index) ? "w-1.5 bg-slate-900" : "w-1 bg-slate-700"),
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_aria_namespaceObject.VisuallyHidden, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    ref: inputRef,
                    ...(0,external_react_aria_namespaceObject.mergeProps)(inputProps, focusProps)
                })
            })
        })
    });
}
function Slider(props) {
    let trackRef = (0,external_react_.useRef)(null);
    let state = (0,external_react_stately_namespaceObject.useSliderState)(props);
    let { groupProps , trackProps , labelProps , outputProps  } = (0,external_react_aria_namespaceObject.useSlider)(props, state, trackRef);
    let { focusProps , isFocusVisible  } = (0,external_react_aria_namespaceObject.useFocusRing)();
    let currentTime = parseTime(state.getThumbValue(0));
    let totalTime = parseTime(state.getThumbMaxValue(0));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...groupProps,
        className: "absolute inset-x-0 bottom-full flex flex-auto touch-none items-center gap-6 md:relative",
        children: [
            props.label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "sr-only",
                ...labelProps,
                children: props.label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ...trackProps,
                onMouseDown: (...args)=>{
                    trackProps.onMouseDown(...args);
                    props.onChangeStart?.();
                },
                onPointerDown: (...args)=>{
                    trackProps.onPointerDown(...args);
                    props.onChangeStart?.();
                },
                ref: trackRef,
                className: "relative w-full bg-slate-100 md:rounded-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_clsx_default()("h-2 md:rounded-r-md md:rounded-l-xl", isFocusVisible || state.isThumbDragging(0) ? "bg-slate-900" : "bg-slate-700"),
                        style: {
                            width: state.getThumbValue(0) === 0 ? 0 : `calc(${state.getThumbPercent(0) * 100}% - ${isFocusVisible || state.isThumbDragging(0) ? "0.3125rem" : "0.25rem"})`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Thumb, {
                        index: 0,
                        state: state,
                        trackRef: trackRef,
                        onChangeStart: props.onChangeStart,
                        focusProps: focusProps,
                        isFocusVisible: isFocusVisible
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hidden items-center gap-2 md:flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("output", {
                        ...outputProps,
                        "aria-live": "off",
                        className: external_clsx_default()("hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 md:block", state.getThumbMaxValue(0) === 0 && "opacity-0", isFocusVisible || state.isThumbDragging(0) ? "bg-slate-100 text-slate-900" : "text-slate-500"),
                        children: formatTime(currentTime, totalTime)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-sm leading-6 text-slate-300",
                        "aria-hidden": "true",
                        children: "/"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: external_clsx_default()("hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 text-slate-500 md:block", state.getThumbMaxValue(0) === 0 && "opacity-0"),
                        children: formatTime(totalTime)
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/player/AudioPlayer.jsx










function AudioPlayer_parseTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    seconds = seconds - hours * 3600 - minutes * 60;
    return [
        hours,
        minutes,
        seconds
    ];
}
function formatHumanTime(seconds) {
    let [h, m, s] = AudioPlayer_parseTime(seconds);
    return `${h} hour${h === 1 ? "" : "s"}, ${m} minute${m === 1 ? "" : "s"}, ${s} second${s === 1 ? "" : "s"}`;
}
function AudioPlayer() {
    let player = (0,AudioProvider/* useAudioPlayer */.x)();
    let wasPlayingRef = (0,external_react_.useRef)(false);
    let { 0: currentTime , 1: setCurrentTime  } = (0,external_react_.useState)(player.currentTime);
    (0,external_react_.useEffect)(()=>{
        setCurrentTime(null);
    }, [
        player.currentTime
    ]);
    if (!player.meta) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center gap-6 bg-white/90 py-4 px-4 shadow shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ jsx_runtime_.jsx(PlayButton/* PlayButton */.J, {
                    player: player,
                    size: "medium"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: player.meta.link,
                        className: "truncate text-center text-sm font-bold leading-6 md:text-left",
                        title: player.meta.title,
                        children: player.meta.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between gap-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(MuteButton, {
                                    player: player
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-none items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(RewindButton, {
                                        player: player
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "md:hidden",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(PlayButton/* PlayButton */.J, {
                                            player: player,
                                            size: "small"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ForwardButton, {
                                        player: player
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Slider, {
                                label: "Current time",
                                maxValue: player.duration,
                                step: 1,
                                value: [
                                    currentTime ?? player.currentTime
                                ],
                                onChange: ([v])=>setCurrentTime(v),
                                onChangeEnd: (value)=>{
                                    player.seek(value);
                                    if (wasPlayingRef.current) {
                                        player.play();
                                    }
                                },
                                numberFormatter: {
                                    format: formatHumanTime
                                },
                                onChangeStart: ()=>{
                                    wasPlayingRef.current = player.playing;
                                    player.pause();
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(PlaybackRateButton, {
                                            player: player
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hidden items-center md:flex",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(MuteButton, {
                                            player: player
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/images/poster.png
/* harmony default export */ const poster = ({"src":"/podcasts/_next/static/media/poster.11292dc0.png","height":960,"width":960,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEX////+///+//7+/v7/+/79+/z++vz++fv/9vv/9vr/9fv/9fr+9fr+9Pn+8/n96PP/4/L/4/H93+/83u771ejz1uXv1OLn2N/j09v/w+HZydH7s9n6s9jfvM7duszQv8fnsczlsMvEaprCZZfnICRzAAAARklEQVR42hXDhxGAIBAEwFOS4PMYMGAO/feo7MxCACKHiaosVDTQWwLSqiGv51zeW6Ie9nk6Rgfu28o1HYODJ/KBQZZ+lj5vRQNwPmf5ZQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/components/Layout.jsx







function randomBetween(min, max, seed = 1) {
    return ()=>{
        let rand = Math.sin(seed++) * 10000;
        rand = rand - Math.floor(rand);
        return Math.floor(rand * (max - min + 1) + min);
    };
}
function Waveform(props) {
    let id = (0,external_react_.useId)();
    let bars = {
        total: 100,
        width: 2,
        gap: 2,
        minHeight: 40,
        maxHeight: 100
    };
    let barHeights = Array.from({
        length: bars.total
    }, randomBetween(bars.minHeight, bars.maxHeight));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: `${id}-fade`,
                        x1: "0",
                        x2: "0",
                        y1: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "40%",
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "100%",
                                stopColor: "black"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: `${id}-gradient`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0%",
                                stopColor: "#4989E8"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "50%",
                                stopColor: "#6159DA"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "100%",
                                stopColor: "#FF54AD"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                        id: `${id}-mask`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            width: "100%",
                            height: "100%",
                            fill: `url(#${id}-pattern)`
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("pattern", {
                        id: `${id}-pattern`,
                        width: bars.total * bars.width + bars.total * bars.gap,
                        height: "100%",
                        patternUnits: "userSpaceOnUse",
                        children: Array.from({
                            length: bars.total
                        }, (_, index)=>/*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                width: bars.width,
                                height: `${barHeights[index]}%`,
                                x: bars.gap * (index + 1) + bars.width * index,
                                fill: `url(#${id}-fade)`
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                width: "100%",
                height: "100%",
                fill: `url(#${id}-gradient)`,
                mask: `url(#${id}-mask)`,
                opacity: "0.25"
            })
        ]
    });
}
function TinyWaveFormIcon({ colors =[] , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 10 10",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z",
                className: colors[0]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z",
                className: colors[1]
            })
        ]
    });
}
function SpotifyIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 32 32",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06"
        })
    });
}
function ApplePodcastIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 32 32",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M27.528 24.8c-.232.592-.768 1.424-1.536 2.016-.44.336-.968.664-1.688.88-.768.232-1.72.304-2.904.304H10.6c-1.184 0-2.128-.08-2.904-.304a4.99 4.99 0 0 1-1.688-.88c-.76-.584-1.304-1.424-1.536-2.016C4.008 23.608 4 22.256 4 21.4V10.6c0-.856.008-2.208.472-3.4.232-.592.768-1.424 1.536-2.016.44-.336.968-.664 1.688-.88C8.472 4.08 9.416 4 10.6 4h10.8c1.184 0 2.128.08 2.904.304a4.99 4.99 0 0 1 1.688.88c.76.584 1.304 1.424 1.536 2.016C28 8.392 28 9.752 28 10.6v10.8c0 .856-.008 2.208-.472 3.4Zm-9.471-6.312a1.069 1.069 0 0 0-.32-.688c-.36-.376-.992-.624-1.736-.624-.745 0-1.377.24-1.737.624-.183.2-.287.4-.32.688-.063.558-.024 1.036.04 1.807v.009c.065.736.184 1.72.336 2.712.112.712.2 1.096.28 1.368.136.448.625.832 1.4.832.776 0 1.273-.392 1.4-.832.08-.272.169-.656.28-1.368.152-1 .273-1.976.337-2.712.072-.776.104-1.256.04-1.816ZM16 16.375c1.088 0 1.968-.88 1.968-1.967 0-1.08-.88-1.968-1.968-1.968s-1.968.88-1.968 1.968.88 1.967 1.968 1.967Zm-.024-9.719c-4.592.016-8.352 3.744-8.416 8.336-.048 3.72 2.328 6.904 5.648 8.072.08.032.16-.04.152-.12a35.046 35.046 0 0 0-.041-.288c-.029-.192-.057-.384-.079-.576a.317.317 0 0 0-.168-.232 7.365 7.365 0 0 1-4.424-6.824c.04-4 3.304-7.256 7.296-7.288 4.088-.032 7.424 3.28 7.424 7.36 0 3.016-1.824 5.608-4.424 6.752a.272.272 0 0 0-.168.232l-.12.864c-.016.088.072.152.152.12a8.448 8.448 0 0 0 5.648-7.968c-.016-4.656-3.816-8.448-8.48-8.44Zm-5.624 8.376c.04-2.992 2.44-5.464 5.432-5.576 3.216-.128 5.88 2.456 5.872 5.64a5.661 5.661 0 0 1-2.472 4.672c-.08.056-.184-.008-.176-.096.016-.344.024-.648.008-.96 0-.104.04-.2.112-.272a4.584 4.584 0 0 0 1.448-3.336 4.574 4.574 0 0 0-4.752-4.568 4.585 4.585 0 0 0-4.392 4.448 4.574 4.574 0 0 0 1.448 3.456c.08.072.12.168.112.272-.016.32-.016.624.008.968 0 .088-.104.144-.176.096a5.65 5.65 0 0 1-2.472-4.744Z"
        })
    });
}
function OvercastIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 32 32",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16 28.8A12.77 12.77 0 0 1 3.2 16 12.77 12.77 0 0 1 16 3.2 12.77 12.77 0 0 1 28.8 16 12.77 12.77 0 0 1 16 28.8Zm0-5.067.96-.96-.96-3.68-.96 3.68.96.96Zm-1.226-.054-.48 1.814 1.12-1.12-.64-.694Zm2.453 0-.64.64 1.12 1.12-.48-1.76Zm.907 3.307L16 24.853l-2.133 2.133c.693.107 1.387.213 2.133.213.747 0 1.44-.053 2.134-.213ZM16 4.799C9.814 4.8 4.8 9.813 4.8 16c0 4.907 3.147 9.067 7.52 10.56l2.4-8.906c-.533-.374-.853-1.014-.853-1.707A2.14 2.14 0 0 1 16 13.813a2.14 2.14 0 0 1 2.134 2.133c0 .693-.32 1.28-.854 1.707l2.4 8.906A11.145 11.145 0 0 0 27.2 16c0-6.186-5.013-11.2-11.2-11.2Zm7.307 16.747c-.267.32-.747.427-1.12.16-.373-.267-.427-.747-.16-1.067 0 0 1.44-1.92 1.44-4.64 0-2.72-1.44-4.64-1.44-4.64-.267-.32-.213-.8.16-1.066.373-.267.853-.16 1.12.16.107.106 1.76 2.293 1.76 5.546 0 3.254-1.653 5.44-1.76 5.547Zm-3.893-2.08c-.32-.32-.267-.907.053-1.227 0 0 .8-.853.8-2.24 0-1.386-.8-2.186-.8-2.24-.32-.32-.32-.853-.053-1.226.32-.374.8-.374 1.12-.054.053.054 1.333 1.387 1.333 3.52 0 2.134-1.28 3.467-1.333 3.52-.32.32-.8.267-1.12-.053Zm-6.827 0c-.32.32-.8.373-1.12.053-.053-.106-1.333-1.386-1.333-3.52 0-2.133 1.28-3.413 1.333-3.52.32-.32.853-.32 1.12.054.32.32.267.906-.053 1.226 0 .054-.8.854-.8 2.24 0 1.387.8 2.24.8 2.24.32.32.373.854.053 1.227Zm-2.773 2.24c-.374.267-.854.16-1.12-.16-.107-.107-1.76-2.293-1.76-5.547 0-3.253 1.653-5.44 1.76-5.546.266-.32.746-.427 1.12-.16.373.266.426.746.16 1.066 0 0-1.44 1.92-1.44 4.64 0 2.72 1.44 4.64 1.44 4.64.266.32.16.8-.16 1.067Z"
        })
    });
}
function RSSIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 32 32",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.5 4h15A4.5 4.5 0 0 1 28 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 4 23.5v-15A4.5 4.5 0 0 1 8.5 4ZM13 22a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6-6a9 9 0 0 1 9 9h3A12 12 0 0 0 7 13v3Zm5.74-4.858A15 15 0 0 0 7 10V7a18 18 0 0 1 18 18h-3a15 15 0 0 0-9.26-13.858Z"
        })
    });
}
function PersonIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 11 12",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M5.019 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.29 7c1.175 0 2.12-1.046 1.567-2.083A5.5 5.5 0 0 0 5.019 7 5.5 5.5 0 0 0 .162 9.917C-.39 10.954.554 12 1.73 12h6.578Z"
        })
    });
}
function AboutSection(props) {
    let { 0: isExpanded , 1: setIsExpanded  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "flex items-center font-mono text-sm font-medium leading-7 text-slate-900",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TinyWaveFormIcon, {
                        colors: [
                            "fill-violet-300",
                            "fill-pink-300"
                        ],
                        className: "h-2.5 w-2.5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-2.5",
                        children: "Небалакучий Боб"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: external_clsx_default()("mt-2 text-base leading-7 text-slate-700", !isExpanded && "lg:line-clamp-4"),
                children: "У цьому шоу Мовчазний та Боб копають глибше, щоб дістатися фактів із гостями (і без), які були названі лиходіями суспільством, що швидко судить. Підключайтеся, щоб дізнатися правду про очевидні речі."
            }),
            !isExpanded && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block",
                onClick: ()=>setIsExpanded(true),
                children: "Більше"
            })
        ]
    });
}
function Layout({ children  }) {
    let hosts = [
        "Vadim Teteva",
        "Silent Bob"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-mono text-slate-500",
                                children: "Hosted by"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "mt-6 flex gap-6 font-bold text-slate-900",
                                children: hosts.map((host, hostIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                        children: [
                                            hostIndex !== 0 && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                "aria-hidden": "true",
                                                className: "text-slate-400",
                                                children: "/"
                                            }),
                                            host
                                        ]
                                    }, host))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-12 lg:px-8 xl:px-12",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/",
                                className: "relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl",
                                "aria-label": "Homepage",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "w-full",
                                        src: poster,
                                        alt: "",
                                        sizes: "(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem",
                                        priority: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mt-10 text-center lg:mt-12 lg:text-left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-xl font-bold text-slate-900",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: "Експлікація"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-3 text-lg font-medium leading-8 text-slate-700",
                                        children: "Балаканина про все і ні про що."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(AboutSection, {
                                className: "mt-12 hidden lg:block"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: "mt-10 lg:mt-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(TinyWaveFormIcon, {
                                                colors: [
                                                    "fill-indigo-300",
                                                    "fill-blue-300"
                                                ],
                                                className: "h-2.5 w-2.5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "ml-2.5",
                                                children: "Слухати"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        role: "list",
                                        className: "mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4",
                                        children: [
                                            [
                                                "Spotify",
                                                SpotifyIcon
                                            ],
                                            [
                                                "Apple Podcast",
                                                ApplePodcastIcon
                                            ],
                                            [
                                                "Overcast",
                                                OvercastIcon
                                            ],
                                            [
                                                "RSS Feed",
                                                RSSIcon
                                            ], 
                                        ].map(([label, Icon])=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "flex",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    href: "/",
                                                    className: "group flex items-center",
                                                    "aria-label": label,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                                            className: "h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "hidden sm:ml-3 sm:block",
                                                            children: label
                                                        })
                                                    ]
                                                })
                                            }, label))
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Waveform, {
                        className: "absolute left-0 top-0 h-20 w-full"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative",
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(AboutSection, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(PersonIcon, {
                                    className: "h-3 w-auto fill-slate-300"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-2.5",
                                    children: "Hosted by"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-2 flex gap-6 text-sm font-bold leading-7 text-slate-900",
                            children: hosts.map((host, hostIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                    children: [
                                        hostIndex !== 0 && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            "aria-hidden": "true",
                                            className: "text-slate-400",
                                            children: "/"
                                        }),
                                        host
                                    ]
                                }, host))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120",
                children: /*#__PURE__*/ jsx_runtime_.jsx(AudioPlayer, {})
            })
        ]
    });
}

;// CONCATENATED MODULE: external "focus-visible"
const external_focus_visible_namespaceObject = require("focus-visible");
;// CONCATENATED MODULE: ./src/pages/_app.jsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(AudioProvider/* AudioProvider */.n, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
};


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,608,331,535], () => (__webpack_exec__(9371)));
module.exports = __webpack_exports__;

})();