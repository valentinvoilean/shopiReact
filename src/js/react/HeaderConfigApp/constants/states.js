export const defaultState = {
    HeaderConfig: {
        data: {
            mobile: {
                Flyout: ['Search', 'Currency', 'Language', 'MyAccount', 'SocialIcons'],
                Hidden: ['CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4', 'Breadcrumb', 'Search', 'MyAccount'],
                TopLeft: ['MenuIcon'],
                TopCenter: ['Logo'],
                TopRight: ['Cart', 'Wishlist'],
                Main: ['Menu'],
                Bottom: ['WelcomeMessage']
            },
            tablet: {
                Hidden: ['CustomLink3', 'CustomLink4'],
                TopLeft: ['Currency', 'Language', 'CustomLink1', 'CustomLink2'],
                TopCenter: [],
                TopRight: ['MyAccount', 'Wishlist'],
                MainLeft: ['Logo'],
                MainCenter: ['Menu'],
                MainRight: ['Cart', 'Search'],
                BottomLeft: ['Breadcrumb'],
                BottomCenter: [],
                BottomRight: ['SocialIcons', 'WelcomeMessage']
            },
            desktop: {
                Hidden: ['CustomLink3', 'CustomLink4'],
                TopLeft: ['Currency', 'Language', 'CustomLink1', 'CustomLink2'],
                TopCenter: [],
                TopRight: ['MyAccount', 'Wishlist'],
                MainLeft: ['Logo'],
                MainCenter: ['Menu'],
                MainRight: ['Cart', 'Search'],
                BottomLeft: ['Breadcrumb'],
                BottomCenter: [],
                BottomRight: ['SocialIcons', 'WelcomeMessage']
            }
        },
        shouldComponentUpdate: false
    }
};

export const validStates = {
    mobile: [
        {
            names: ['MenuIcon'],
            conditions: [
                {
                    allowedPositions: ['TopLeft', 'TopRight'],
                    order: 0,
                    cellConditions: {
                        max: 2
                    },
                    itemConditions: [
                        {
                            names: ['Cart', 'MyAccount', 'Wishlist', 'Search', 'Menu', 'WelcomeMessage'],
                            position: 'TopLeft',
                            order: 0,
                            excluded: true
                        }
                    ]
                }
            ]
        },
        {
            names: ['Logo'],
            conditions: [
                {
                    allowedPositions: ['TopLeft'],
                    order: 1,
                    cellConditions: {
                        max: 2
                    },
                    itemConditions: [
                        {
                            names: ['MenuIcon'],
                            position: 'TopRight',
                            order: 0,
                            required: true
                        }
                    ]
                },
                {
                    allowedPositions: ['TopCenter'],
                    order: 0,
                    cellConditions: {
                        max: 1
                    }
                }
            ]
        },
        {
            names: ['Cart'],
            conditions: [
                {
                    allowedPositions: ['TopRight', 'TopLeft'],
                    itemConditions: [
                        {
                            names: ['Logo', 'MenuIcon'],
                            position: 'TopRight',
                            excluded: true
                        }
                    ]
                }
            ]
        },
        {
            names: ['MyAccount'],
            conditions: [
                {
                    allowedPositions: ['Hidden']
                },
                {
                    allowedPositions: ['TopRight'],
                    itemConditions: [
                        {
                            names: ['Logo', 'MenuIcon'],
                            position: 'TopRight',
                            excluded: true
                        }
                    ]
                }
            ]
        },
        {
            names: ['Wishlist', 'Search'],
            conditions: [
                {
                    allowedPositions: ['Hidden']
                },
                {
                    allowedPositions: ['TopRight'],
                    itemConditions: [
                        {
                            names: ['Logo', 'MenuIcon'],
                            position: 'TopRight',
                            excluded: true
                        }
                    ]
                }
            ]
        },
        {
            names: ['Menu', 'WelcomeMessage'],
            conditions: [
                {
                    allowedPositions: ['Hidden']
                },
                {
                    allowedPositions: ['Main'],
                    cellConditions: {
                        max: 1
                    }
                },
                {
                    allowedPositions: ['Bottom'],
                    cellConditions: {
                        max: 1
                    }
                }
            ]
        }
    ],
    tablet: [
        {
            names: ['Logo'],
            conditions: [
                {
                    allowedPositions: ['MainLeft', 'MainCenter'],
                    order: 0,
                    cellConditions: {
                        max: 1
                    }
                }
            ]
        },
        {
            names: ['Menu'],
            conditions: [
                {
                    allowedPositions: ['MainCenter', 'BottomCenter'],
                    cellConditions: {
                        max: 1
                    }
                }
            ]
        },
        {
            names: ['Cart'],
            conditions: [
                {
                    allowedPositions: ['MainRight']
                }
            ]
        },
        {
            names: ['Breadcrumb'],
            conditions: [
                {
                    allowedPositions: ['BottomLeft']
                }
            ]
        },
        {
            names: ['MyAccount', 'Wishlist'],
            conditions: [
                {
                    allowedPositions: ['Hidden', 'TopLeft', 'TopRight', 'MainLeft', 'MainRight', 'BottomLeft', 'BottomRight']
                }
            ]
        },
        {
            names: ['Search', 'SocialIcons'],
            conditions: [
                {
                    allowedPositions: ['TopLeft', 'TopRight', 'MainLeft', 'MainRight', 'BottomLeft', 'BottomRight']
                }
            ]
        },
        {
            names: ['WelcomeMessage'],
            conditions: [
                {
                    allowedPositions: ['TopLeft', 'TopCenter', 'TopRight', 'MainLeft', 'MainCenter', 'BottomLeft', 'BottomCenter', 'BottomRight']
                }
            ]
        },
        {
            names: ['Currency', 'Language'],
            conditions: [
                {
                    allowedPositions: ['Hidden', 'TopLeft', 'TopRight']
                }
            ]
        },
        {
            names: ['CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
            conditions: [
                {
                    allowedPositions: ['Hidden', 'TopLeft', 'TopCenter', 'TopRight', 'MainRight', 'BottomLeft', 'BottomRight']
                },
                {
                    allowedPositions: ['MainLeft'],
                    itemConditions: [
                        {
                            names: ['Logo'],
                            position: 'MainLeft',
                            excluded: true
                        }
                    ]
                },
                {
                    allowedPositions: ['MainCenter'],
                    itemConditions: [
                        {
                            names: ['Logo', 'Menu'],
                            position: 'MainCenter',
                            excluded: true
                        }
                    ]
                },
                {
                    allowedPositions: ['BottomCenter'],
                    itemConditions: [
                        {
                            names: ['Menu'],
                            position: 'BottomCenter',
                            excluded: true
                        }
                    ]
                }
            ]
        }
    ],
    desktop: [
        {
            names: ['Logo'],
            conditions: [
                {
                    allowedPositions: ['MainLeft', 'MainCenter'],
                    order: 0,
                    cellConditions: {
                        max: 1
                    }
                }
            ]
        },
        {
            names: ['Menu'],
            conditions: [
                {
                    allowedPositions: ['MainCenter', 'BottomCenter'],
                    cellConditions: {
                        max: 1
                    }
                }
            ]
        },
        {
            names: ['Cart'],
            conditions: [
                {
                    allowedPositions: ['MainRight']
                }
            ]
        },
        {
            names: ['Breadcrumb'],
            conditions: [
                {
                    allowedPositions: ['BottomLeft']
                }
            ]
        },
        {
            names: ['MyAccount', 'Wishlist'],
            conditions: [
                {
                    allowedPositions: ['Hidden', 'TopLeft', 'TopRight', 'MainLeft', 'MainRight', 'BottomLeft', 'BottomRight']
                }
            ]
        },
        {
            names: ['Search', 'SocialIcons'],
            conditions: [
                {
                    allowedPositions: ['TopLeft', 'TopRight', 'MainLeft', 'MainRight', 'BottomLeft', 'BottomRight']
                }
            ]
        },
        {
            names: ['WelcomeMessage'],
            conditions: [
                {
                    allowedPositions: ['TopLeft', 'TopCenter', 'TopRight', 'MainLeft', 'MainCenter', 'BottomLeft', 'BottomCenter', 'BottomRight']
                }
            ]
        },
        {
            names: ['Currency', 'Language'],
            conditions: [
                {
                    allowedPositions: ['Hidden', 'TopLeft', 'TopRight']
                }
            ]
        },
        {
            names: ['CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
            conditions: [
                {
                    allowedPositions: ['Hidden', 'TopLeft', 'TopCenter', 'TopRight', 'MainRight', 'BottomLeft', 'BottomRight']
                },
                {
                    allowedPositions: ['MainLeft'],
                    itemConditions: [
                        {
                            names: ['Logo'],
                            position: 'MainLeft',
                            excluded: true
                        }
                    ]
                },
                {
                    allowedPositions: ['MainCenter'],
                    itemConditions: [
                        {
                            names: ['Logo', 'Menu'],
                            position: 'MainCenter',
                            excluded: true
                        }
                    ]
                },
                {
                    allowedPositions: ['BottomCenter'],
                    itemConditions: [
                        {
                            names: ['Menu'],
                            position: 'BottomCenter',
                            excluded: true
                        }
                    ]
                }
            ]
        }
    ]
};
