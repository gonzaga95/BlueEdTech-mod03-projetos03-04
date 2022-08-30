export const swaggerDocumentation = {
    openapi: '3.0.0',
    info: {
        title: 'API RICK AND MORTY',
        description: 'CRUD API do Rick and Morty',
        termsOfService: '',
        contact: {
            email: 'gonzagas.dudu@gmail.com'
        },
        version: '1.0.1'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'DEV API'
        },
        {
            url: '',
            description: 'production API'
        }
    ],
    paths: {
        '/users': {
            get: {
                summary: 'List with all users',
                description: 'Route responsible for listing all users',
                tags: ['users'],
                responses: {
                    404: {
                        description: 'Not Found'
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    items: {
                                        $ref: '#components/schemas/getUsers'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '/users/{id}': {
            get: {
                summary: 'Search for a user by ID',
                description: 'Route responsible for searching for a user by ID',
                tags: ['users'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'User ID for search',
                        required: true
                    }
                ],
                responses: {
                    400: {
                        description: 'Bad request'
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/getUsers'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/users/create': {
            post: {
                summary: 'Register a user',
                description: 'Route responsible for registering a user',
                tags: ['users'],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/postUsers'
                            },
                            examples: {
                                user: {
                                    value: {
                                        name: 'User Name',
                                        email: 'username@webemail.com',
                                        password: 'strong@!password.com',
                                        image: 'http://avataruser.com.br'
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    400: {
                        description: 'Bad request'
                    },
                    201: {
                        description: 'Created',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/getUsers'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/users/update/{id}': {
            patch: {
                summary: 'Edit a user by ID',
                description: 'Route responsible for editing a user by ID',
                tags: ['users'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'User ID for search',
                        required: true
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/postUsers'
                            },
                            examples: {
                                user: {
                                    value: {
                                        name: 'User name',
                                        email: 'useravatar@image.com',
                                        password: '',
                                        image: 'http://avatarimage.com'
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    400: {
                        description: 'Bad Request'
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/getUsers'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/users/delete/{id}': {
            delete: {
                summary: 'Delete a user by ID',
                description: 'Route responsible for deleting a user by ID',
                tags: ['users'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'User ID for delete',
                        required: true
                    }
                ],
                responses: {
                    400: {
                        description: 'Bad request'
                    },
                    200: {
                        description: 'OK'
                    }
                }
            }
        },
        '/auth/login': {
            post: {
                sumarry: 'User access route',
                description:
                    'Route responsible for logging in a registered user',
                tags: ['auth'],
                responses: {
                    401: {
                        description: 'Invalid password'
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#components/schemas/getUsers'
                                },
                                examples: {
                                    user: {
                                        value: {
                                            email: 'test@devtest.com',
                                            password: 'strong@!password'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                response: {
                    400: {
                        description: 'Not found'
                    },
                    200: {
                        description: 'OK'
                    }
                }
            }
        },
        '/characters/all-character': {
            get: {
                summary: 'List with all characters',
                description: 'Route responsible for listing all characters',
                tags: ['characters'],
                responses: {
                    404: {
                        description: 'Not Found'
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    items: {
                                        $ref: '#components/schemas/characters'
                                    }
                                },
                                examples: {
                                    character: {
                                        value: {
                                            name: 'Rick',
                                            image: 'http://rickfunimage.com'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '/characters/id-character/{id}': {
            get: {
                summary: 'Search for a character by ID',
                description:
                    'Route responsible for searching for a character by ID',
                tags: ['characters'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'Character ID for search',
                        required: true
                    }
                ],
                responses: {
                    400: {
                        description: 'Bad Request'
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/characters'
                                },
                                examples: {
                                    character: {
                                        value: {
                                            name: 'Rick',
                                            image: 'http://rickfunimage.com'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '/characters/search': {
            get: {
                summary: 'Search for a character by name',
                description: 'Searching for a character by name',
                tags: ['characters'],
                parameters: [
                    {
                        name: 'name',
                        in: 'query',
                        description: 'Character name for search',
                        required: true
                    }
                ],
                responses: {
                    400: {
                        description: 'Invalid name'
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/characters'
                                },
                                examples: {
                                    character: {
                                        value: {
                                            name: 'Rick',
                                            image: 'http://rickfunimage.com'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '/characters/create-character': {
            post: {
                summary: 'register a character',
                description: 'Route responsible for registering a character',
                tags: ['characters'],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/characters'
                            },
                            examples: {
                                character: {
                                    value: {
                                        name: 'Rick',
                                        image: 'http://rickfunimage.com'
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    400: {
                        description: 'Bad Request'
                    },
                    201: {
                        description: 'Created',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/characters'
                                },
                                examples: {
                                    character: {
                                        value: {
                                            name: 'Rick',
                                            image: 'http://rickfunimage.com'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '/characters/update-character/{id}': {
            patch: {
                summary: 'Edit a character by ID',
                description: 'Route responsible for editing a character by ID',
                tags: ['characters'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'character ID for search',
                        required: true
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/characters'
                            },
                            examples: {
                                character: {
                                    value: {
                                        name: 'Diane Sanchez',
                                        image: 'http://dianerickimage.com'
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    400: {
                        description: 'Bad Request'
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/characters'
                                },
                                examples: {
                                    user: {
                                        value: {
                                            name: 'Rick',
                                            image: 'http://rickfunimage.com'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '/characters/delete-character/{id}': {
            delete: {
                summary: 'Delete a character by ID',
                description: 'Route responsible for deleting a character by ID',
                tags: ['characters'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'character id for delete',
                        required: true
                    }
                ],
                responses: {
                    400: {
                        description: 'Bad Request'
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/characters'
                                },
                                examples: {
                                    user: {
                                        value: {
                                            name: 'Rick',
                                            image: 'http://rickfunimage.com'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    components: {
        schemas: {
            getUsers: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    image: {
                        type: 'string'
                    }
                }
            },
            postUsers: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    password: {
                        type: 'string'
                    },
                    image: {
                        type: 'string'
                    }
                }
            },
            characters: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    image: {
                        type: 'string'
                    }
                }
            }
        }
    }
};
