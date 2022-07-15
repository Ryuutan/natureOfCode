function grid(detail) {
    stroke(0);
    for (i = 1; i < detail; i++) {
        line(0, height * (i / detail), width, height * (i / detail));
        line(width * (i / detail), 0, width * (i / detail), height);
    }
}