let list = document.getElementById("myList")

let data = [
  {
    name: "Cersei Lannister",
    telephone: "111-111-1111",
    email: "cersei@got.org",
  },
  {
    name: "Geoffrey Lannister",
    telephone: "222-222-2222",
    email: "geoffrey@got.org",
  },
  {
    name: "Jaime Lannister",
    telephone: "333-333-3333",
    email: "jaime@got.org",
  },
]

let searchBar = document.getElementById("search")
let number = document.getElementById("number")

hydrateAddressBook(data)
setNumberOfEntitiesFound(data)

searchBar.value = ""
searchBar.focus()

searchBar.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let number = document.getElementById("number")
    let filteredEntities = filterEntities(e.target.value)
    let num = numberOfEntitiesFound(filteredEntities)

    list.innerHTML = ""

    hydrateAddressBook(filteredEntities)

    number.innerText = num
  }
})

function setNumberOfEntitiesFound(items) {
  let numberFound = numberOfEntitiesFound(items)
  number.innerText = numberFound
}

function filterEntities(search) {
  return data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )
}

function numberOfEntitiesFound(data) {
  return data.length
}

function hydrateAddressBook(data) {
  data.forEach((item) => {
    let li = document.createElement("li")
    let anchor = document.createElement("A")

    li.setAttribute("id", item.name)
    li.innerText = item.name + ", " + item.telephone + ", "

    anchor.href = "mailto:" + item.email
    anchor.text = item.email

    li.appendChild(anchor)
    list.appendChild(li)
  })
}
