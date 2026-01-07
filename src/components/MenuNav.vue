<script setup lang="ts">
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/vue'
    import { Menu, X } from 'lucide-vue-next'
    
    const router = useRouter()
    const mobileMenuOpen = ref(false)
    
    const items = ref([
        { label: 'Inicio', route: '/' },
        { label: 'Socios', route: '/socios' },
        { label: 'Sobre Nosotros', route: '/sobre-nosotros' },
        { label: 'Contacto', route: '/contacto' }
    ]);
    
    const irDashboard = () => router.push('/dashboard')
    const navigateTo = (route: string) => {
        router.push(route)
        mobileMenuOpen.value = false
    }
</script>

<template>
    <nav class="navbar h-15">
        <div @click="router.push('/')" class="logo">
            <span>FINANFIX</span>
        </div>
 
        <div class="nav-links">
            <a 
                v-for="item in items" 
                :key="item.label"
                @click="navigateTo(item.route)"
                class="nav-link"
                :class="{ 'active': router.currentRoute.value.path === item.route }"
            >
                {{ item.label }}
            </a>
        </div>

        <div class="nav-auth">
            <SignedOut>
                <SignInButton>
                    <button class="btn-login">Iniciar Sesión</button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <button class="btn-dashboard" @click="irDashboard">Dashboard</button>
                <UserButton />
            </SignedIn>
        </div>

        <button @click="mobileMenuOpen = !mobileMenuOpen" class="mobile-toggle">
            <Menu v-if="!mobileMenuOpen" :size="20" />
            <X v-else :size="20" />
        </button>

        <Transition name="fade">
            <div v-if="mobileMenuOpen" class="mobile-menu">
                <a 
                    v-for="item in items" 
                    :key="item.label"
                    @click="navigateTo(item.route)"
                    class="mobile-link"
                >
                    {{ item.label }}
                </a>
                <div class="mobile-auth">
                    <SignedOut>
                        <SignInButton>
                            <button class="btn-login">Iniciar Sesión</button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <button class="btn-dashboard" @click="irDashboard">Dashboard</button>
                    </SignedIn>
                </div>
            </div>
        </Transition>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.5rem;
    min-height: 56px;
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(100, 116, 139, 0.2);
    border-radius: 50px;
    position: relative;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.logo {
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 700;
    color: #10b981;
    letter-spacing: -0.02em;
    transition: opacity 0.2s;
}

.logo:hover {
    opacity: 0.8;
}

.nav-links {
    display: none;
    align-items: center;
    gap: 0.25rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

@media (min-width: 900px) {
    .nav-links {
        display: flex;
    }
}

.nav-link {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    border-radius: 50px;
    transition: all 0.2s ease;
}

.nav-link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
    color: #10b981;
}

.nav-auth {
    display: none;
    align-items: center;
    gap: 0.75rem;
}

@media (min-width: 900px) {
    .nav-auth {
        display: flex;
    }
}

.btn-login {
    padding: 0.5rem 1.25rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: #020617;
    background: #10b981;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-login:hover {
    background: #34d399;
    transform: translateY(-1px);
}

.btn-dashboard {
    padding: 0.5rem 1.25rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: #10b981;
    background: transparent;
    border: 1px solid rgba(16, 185, 129, 0.4);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-dashboard:hover {
    background: rgba(16, 185, 129, 0.15);
    border-color: #10b981;
}

.mobile-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    background: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
}

.mobile-toggle:hover {
    color: #10b981;
}

@media (min-width: 900px) {
    .mobile-toggle {
        display: none;
    }
}

.mobile-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(100, 116, 139, 0.2);
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.mobile-link {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
}

.mobile-link:hover {
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
}

.mobile-auth {
    padding-top: 0.75rem;
    margin-top: 0.5rem;
    border-top: 1px solid rgba(100, 116, 139, 0.2);
    display: flex;
    justify-content: center;
}

.mobile-auth .btn-login,
.mobile-auth .btn-dashboard {
    width: 100%;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
