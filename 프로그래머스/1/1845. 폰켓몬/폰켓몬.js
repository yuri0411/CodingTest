function solution(nums) {
    const mons = new Set(nums);

    return mons.size > Math.floor(nums.length / 2) ? Math.floor(nums.length / 2) : mons.size;
}