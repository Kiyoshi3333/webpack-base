const APICall = async () => {
  try {
    const res = await fetch(
      'https://61cc72dc198df60017aec0a7.mockapi.io/api/users'
    )
    const data: Member[] = await res.json()
    return data.filter(Boolean)
  } catch (e) {
    return []
  }
}

export { APICall }
