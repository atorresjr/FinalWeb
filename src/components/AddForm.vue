<template>
    <div class="absolute inset-0 w-screen h-screen bg-blue-700 flex justify-center items-center">
        <button class="text-white absolute top-2 left-2">
            <mdi:close-circle class="text-6xl" />
        </button>
        <form @submit.prevent class="space-y-4">
            <div class="flex flex-col">
                <label for="title" class="text-white mb-2">Brand:</label>
                <input type="text" name="title" class="rounded py-2 px-4" placeholder="Title" />
            </div>
            <div class="flex flex-col">
                <label for="content" class="text-white mb-2">Model:</label>
                <textarea name="content" class="rounded py-2 px-4" placeholder="Note Content" />
            </div>
            <div>
                <button
                    class="w-full bg-green-500 text-green-800 p-2 rounded mt-4 hover:bg-green-600 hover:text-yellow-900"
                >Save</button>
                <button
                    class="w-full bg-yellow-500 text-yellow-800 p-2 rounded mt-4 hover:bg-yellow-600 hover:text-yellow-900"
                >Add</button>
            </div>
        </form>
    </div>
</template>
  

