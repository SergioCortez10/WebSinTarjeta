import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/inicio' 
        },
        
        {
            path: '/inicio',
            name: 'inicio',
            component: () => import('@/views/pages/Inicio.vue')
        },
        {
            path: '/iniciovideo',
            name: 'iniciovideo',
            component: () => import('@/views/pages/InicioVideo.vue')
        },
        {
            path: '/proceso',
            name: 'proceso',
            component: () => import('@/views/pages/Proceso.vue')
        },
        {
            path: '/menu',
            name: 'menu',
            component: () => import('@/views/pages/Menu.vue')
        },
        {
            path: '/menu/dispensaciontarjetaCI',
            name: 'dispensaciontarjetaCI',
            component: () => import('@/views/pages/DispensacionTarjeta/IngresarCI.vue')
        },

        {
            path: '/menu/dispensaciontarjetaCI/numeroCell',
            name: 'numeroCell',
            component: () => import('@/views/pages/DispensacionTarjeta/IngresarNum.vue')
        },

        {
            path: '/menu/dispensaciontarjetaCI/numeroCell/codigo',
            name: 'codigo',
            component: () => import('@/views/pages/DispensacionTarjeta/IngresarCodigo.vue')
        },

        {
            path: '/menu/ingresarpin',
            name: 'ingresarpin',
            component: () => import('@/views/pages/DispensacionTarjeta/IngresarPin.vue')
        },

        {
            path: '/menu/nuevopin',
            name: 'nuevopin',
            component: () => import('@/views/pages/DispensacionTarjeta/NuevoPin.vue')
        },

        {
            path: '/menu/renuevopin',
            name: 'renuevopin',
            component: () => import('@/views/pages/DispensacionTarjeta/ReNuevoPin.vue')
        },

        {
            path: '/menu/consulta',
            name: 'ingresarci',
            component: () => import('@/views/pages/Consultas/IngresarCI.vue')
        },
    ]
})

router.beforeEach((to, from, next) => {
    next(); 
    
});


export default router;