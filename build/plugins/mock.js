import { viteMockServe } from 'vite-plugin-mock';

export function configMockPlugin(isBuild) {
    return viteMockServe({
        mockPath: 'mock/modules',
        localEnabled: isBuild,
        injectCode: `
        import { setupProdMockServer } from '../mock';
        setupProdMockServer();
        `
    })
}