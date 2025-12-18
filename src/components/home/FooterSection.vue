<script setup lang="ts">
import { Github, Twitter, Linkedin, Mail } from 'lucide-vue-next';
</script>

<template>
    <footer class="relative bg-slate-950 border-t border-slate-800">
        <div class="max-w-6xl mx-auto px-6 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Logo y descripción -->
                <div class="md:col-span-2">
                    <h3 class="text-2xl font-bold mb-4">
                        <span class="bg-linear-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                            FINANFIX
                        </span>
                    </h3>
                    <p class="text-slate-400 text-sm leading-relaxed max-w-md">
                        Tu plataforma de confianza para gestionar tus finanzas personales. Aprende, ahorra e invierte de manera inteligente.
                    </p>
                    <!-- Redes sociales -->
                    <div class="flex gap-4 mt-6">
                        <a href="#" class="text-slate-500 hover:text-primary-400 transition-colors">
                            <Github class="w-5 h-5" />
                        </a>
                        <a href="#" class="text-slate-500 hover:text-primary-400 transition-colors">
                            <Twitter class="w-5 h-5" />
                        </a>
                        <a href="#" class="text-slate-500 hover:text-primary-400 transition-colors">
                            <Linkedin class="w-5 h-5" />
                        </a>
                        <a href="#" class="text-slate-500 hover:text-primary-400 transition-colors">
                            <Mail class="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <!-- Links rápidos -->
                <div>
                    <h4 class="text-white font-semibold mb-4">Enlaces</h4>
                    <ul class="space-y-3">
                        <li>
                            <a href="#" class="text-slate-400 hover:text-white text-sm transition-colors">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="/sobre-nosotros" class="text-slate-400 hover:text-white text-sm transition-colors">
                                Sobre nosotros
                            </a>
                        </li>
                        <li>
                            <a href="/socios" class="text-slate-400 hover:text-white text-sm transition-colors">
                                Socios
                            </a>
                        </li>
                        <li>
                            <a href="/contacto" class="text-slate-400 hover:text-white text-sm transition-colors">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Recursos -->
                <div>
                    <h4 class="text-white font-semibold mb-4">Recursos</h4>
                    <ul class="space-y-3">
                        <li>
                            <a href="#" class="text-slate-400 hover:text-white text-sm transition-colors">
                                Preguntas frecuentes
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-slate-400 hover:text-white text-sm transition-colors">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-slate-400 hover:text-white text-sm transition-colors">
                                Tutoriales
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-slate-400 hover:text-white text-sm transition-colors">
                                Soporte
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Separador y copyright -->
            <div class="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-slate-500 text-sm">
                    © {{ new Date().getFullYear() }} ¿Que haces viendo esto?
                </p>
                <p class="text-slate-600 text-xs">
                    Creado por 
                    <a href="https://github.com/paoloesan" target="_blank" class="hover:text-primary-500 transition-colors">
                        Paolo
                    </a>
                </p>
            </div>
        </div>
    </footer>
</template>
