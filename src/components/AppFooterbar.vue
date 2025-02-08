<template>
    <footer class="bg-black text-white py-6">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
                <h3 class="text-xl font-bold mb-2">Xcart Pvt Ltd</h3>
                <p>&copy; 2024 All Rights Reserved.</p>
            </div>

            <div>
                <h3 class="text-xl font-bold mb-2">Quick Links</h3>
                <ul>
                    <li><Button label="Home" class="p-button-text p-0 hover:underline" /></li>
                    <li><Button label="About Us" class="p-button-text p-0 hover:underline" /></li>
                    <li><Button label="Services" class="p-button-text p-0 hover:underline" /></li>
                    <li><Button label="Contact" class="p-button-text p-0 hover:underline" /></li>
                </ul>
            </div>

            <div>
                <h3 class="text-xl font-bold mb-2">Follow Us</h3>
                <div class="flex justify-center md:justify-start space-x-4">
                    <Button label="Facebook" class="p-button-link hover:text-blue-400" />
                    <Button label="Twitter" class="p-button-link hover:text-blue-500" />
                    <Button label="Instagram" class="p-button-link hover:text-pink-500" />
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import Button from 'primevue/button';
</script>

<style scoped>
footer {
    background: linear-gradient(200deg, #000000, #353338);
    /* Black background for footer */
    border-top: 2px solid #000000;
    /* Indigo color for a vibrant look */
}

.p-button-text,
.p-button-link {
    transition: color 0.3s ease;
    color: white;
}

.p-button-text:hover,
.p-button-link:hover {
    color: #FBBF24;
    /* Amber color on hover */
}
</style>