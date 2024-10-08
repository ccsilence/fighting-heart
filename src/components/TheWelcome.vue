<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { fetchData, addData, updateData, deleteData } from '@/api/server'

const handleFetch = async () => {
  try {
    const data = await fetchData()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

const handleAdd = async (name: string, description: string) => {
  try {
    const addedData = await addData(name, description)
    console.log(addedData)
  } catch (error) {
    console.error(error)
  }
}

const handleUpdate = async (id: number, name: string, description: string) => {
  try {
    const updatedData = await updateData(id, name, description)
    console.log(updatedData)
  } catch (error) {
    console.error(error)
  }
}

const handleDelete = async (id: number) => {
  try {
    const deletedData = await deleteData(id)
    console.log(deletedData)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>
    <button @click="handleAdd('第一章', '美好的开始')">新增1</button>
    <button @click="handleAdd('第二章', '相遇')">新增2</button>
    <button @click="handleDelete(1)">删除</button>
    <button @click="handleUpdate(2, '第二章修改版', '相遇被改写')">修改</button>
    <button @click="handleFetch()">获取数据</button>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>
  </WelcomeItem>
</template>
