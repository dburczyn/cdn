<script type="text/javascript">
                            'use strict';

                            var viewModuleConfig = {
                                mscEndpoint: 'https://www.adoxx.org/micro-service-controller-rest/rest/',
                                viewName: ''
                            };
                            var viewModuleContent = [

                                {
                                    menuName: 'Another microservice output representation',
                                    microserviceId: '1738cb62-cc55-4abf-8560-feafdb83260c',
                                    operationId: 'default',
                                    microserviceInputJSON: '{"Append Text":{"value":"World"}}',
                                    microserviceOutputAdaptAlg: 'return output.dataText;'
                                },

                            ];
                            var viewModule = olive.modules.newOliveViewUI(viewModuleConfig);
                            viewModule.setContent(viewModuleContent);
                            $('#viewPanel').append(viewModule.render());
                        </script>
                        