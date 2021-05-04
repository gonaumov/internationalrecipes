import { shallowMount } from "@vue/test-utils";
import RecipesHome from "@/components/RecipesHome.vue";

describe("RecipesHome.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(RecipesHome, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
