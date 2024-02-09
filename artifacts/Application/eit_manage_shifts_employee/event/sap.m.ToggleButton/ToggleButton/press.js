if (ToggleButton.getPressed() === true) {
    VBoxMainStructure1.setVisible(true);
    VBoxListView.setVisible(false);
    ToggleButton.setText("Show list view");
} else {
    VBoxMainStructure1.setVisible(false);
    VBoxListView.setVisible(true);
    ToggleButton.setText("Visualize possible changes");
}
