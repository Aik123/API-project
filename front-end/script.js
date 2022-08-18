async function display() {
  const data = await fetch("/api/lost_items");
  const datajson = await data.json();

  const allItemsArray = datajson.all_items;
  const itemsWrapper = document.querySelector(".wrapper");

  for (const eachItem of allItemsArray) {
    const container = document.createElement("div");
    container.classList.add("container");

    container.innerHTML = `
      <div class="text">
      <p >ID番号: ${eachItem.id}</p>
      <p >見つけた日付： ${eachItem.date_found}</p>
      <p >名前： ${eachItem.name}</p>
      <p >カテゴリー： ${eachItem.category}</p>
     <p >一言： ${eachItem.description}</p>
     </div>
     <figure class="image">
     <img src=${eachItem.img_url} alt="should apear here">
     </figure>`;
    itemsWrapper.appendChild(container);
  }
}

display();
