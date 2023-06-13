class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }

    addChild(child) {
      this.children.push(child);
    }
  }

  // Creating a tree
  const root = new TreeNode("Root");
  const child1 = new TreeNode("Child 1");
  const child2 = new TreeNode("Child 2");
  const grandchild1 = new TreeNode("Grandchild 1");
  const grandchild2 = new TreeNode("Grandchild 2");
  const grandchild3 = new TreeNode("Grandchild 3");
  const grandchild4 = new TreeNode("Grandchild 4");

  root.addChild(child1);
  root.addChild(child2);
  child1.addChild(grandchild1);
  child1.addChild(grandchild2);
  child2.addChild(grandchild3);
  child2.addChild(grandchild4);

  // Visualizing the tree
  function generateTreeHTML(node, level = 0) {
    let html = `${"&nbsp;&nbsp;".repeat(level)}${level !== 0 ? "├── " : ""}${node.value}<br>`;

    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      const isLastChild = i === node.children.length - 1;

      html += generateTreeHTML(child, level + 1);
      if (isLastChild) {
        html += `${"&nbsp;&nbsp;".repeat(level + 1)}<br>`;
      }
    }

    return html;
  }

  const treeContainer = document.getElementById("treeContainer");
  treeContainer.innerHTML = generateTreeHTML(root);