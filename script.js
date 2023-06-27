const newTask = document.querySelector("#newtask input");
const tasks = document.querySelector("#tasks");
const push = document.querySelector("#push");
push.onclick = function () {
  if (newTask.value.length == 0) {
    alert("Vazifa kiritilmadi");
  } else {
    tasks.innerHTML += `
    <div class="task">
              <span id="taskname">
                  ${newTask.value}
                  </span>
                  <button class="delete">
                  <i class="far fa-trash-alt"></i>
                  </button>
                  </div>
                  `;
    newTask.value = "";
    let deleteTasks = document.querySelectorAll(".delete");
    for (i = 0; i < deleteTasks.length; i++) {
      deleteTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
