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
            position: [
                {
                    names: ['TopLeft', 'TopRight'],
                    order: 0,
                    cellConditions: {
                        max: 2
                    },
                    itemsConditions: [
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
            position: [
                {
                    names: ['TopLeft'],
                    order: 1,
                    cellConditions: {
                        max: 2
                    },
                    itemsConditions: [
                        {
                            names: ['MenuIcon'],
                            position: 'TopRight',
                            order: 0,
                            required: true
                        }
                    ]
                },
                {
                    names: ['TopCenter'],
                    order: 0,
                    cellConditions: {
                        max: 1
                    }
                }
            ]
        },
        {
            names: ['Cart'],
            position: [
                {
                    names: ['TopRight', 'TopLeft'],
                    itemsConditions: [
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
            position: [
                {
                    names: ['Hidden']
                },
                {
                    names: ['TopRight'],
                    itemsConditions: [
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
            position: [
                {
                    names: ['Hidden']
                },
                {
                    names: ['TopRight'],
                    itemsConditions: [
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
            position: [
                {
                    names: ['Hidden']
                },
                {
                    names: ['Main'],
                    cellConditions: {
                        max: 1
                    }
                },
                {
                    names: ['Bottom'],
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
            position: [
                {
                    names: ['MainLeft', 'MainCenter'],
                    order: 0,
                    cellConditions: {
                        max: 1
                    }
                }
            ]
        },
        {
            names: ['Menu'],
            position: [
                {
                    names: ['MainCenter', 'BottomCenter'],
                    cellConditions: {
                        max: 1
                    }
                }
            ]
        },
        {
            names: ['Cart'],
            position: [
                {
                    names: ['MainRight']
                }
            ]
        },
        {
            names: ['Breadcrumb'],
            position: [
                {
                    names: ['BottomLeft']
                }
            ]
        },
        {
            names: ['MyAccount', 'Wishlist'],
            position: [
                {
                    names: ['Hidden', 'TopLeft', 'TopRight', 'MainLeft', 'MainRight', 'BottomLeft', 'BottomRight']
                }
            ]
        },
        {
            names: ['Search', 'SocialIcons'],
            position: [
                {
                    names: ['TopLeft', 'TopRight', 'MainLeft', 'MainRight', 'BottomLeft', 'BottomRight']
                }
            ]
        },
        {
            names: ['WelcomeMessage'],
            position: [
                {
                    names: ['TopLeft', 'TopCenter', 'TopRight', 'MainLeft', 'MainCenter', 'BottomLeft', 'BottomCenter', 'BottomRight']
                }
            ]
        },
        {
            names: ['Currency', 'Language'],
            position: [
                {
                    names: ['Hidden', 'TopLeft', 'TopRight']
                }
            ]
        },
        {
            names: ['CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
            position: [
                {
                    names: ['Hidden', 'TopLeft', 'TopCenter', 'TopRight', 'MainRight', 'BottomLeft', 'BottomRight']
                },
                {
                    names: ['MainLeft'],
                    itemsConditions: [
                        {
                            names: ['Logo'],
                            position: 'MainLeft',
                            excluded: true
                        }
                    ]
                },
                {
                    names: ['MainCenter'],
                    itemsConditions: [
                        {
                            names: ['Logo', 'Menu'],
                            position: 'MainCenter',
                            excluded: true
                        }
                    ]
                },
                {
                    names: ['BottomCenter'],
                    itemsConditions: [
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
