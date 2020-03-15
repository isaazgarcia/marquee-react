import data from '../../data/download';

export default (req, res) => {
    let { slug } = req.query;
    res.status(200).json(data.pages.find(page=>page.slug===slug) || {});
};
