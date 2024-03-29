@mixin padding-hack($padding, $object-fit: cover) {
    position: relative;
    padding-top: $padding;
    @content;

    & > img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: $object-fit;
    }
}